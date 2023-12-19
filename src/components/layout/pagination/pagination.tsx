import React, {Fragment, ReactNode} from "react";
import {
    HORIZONTAL_POSITIONS,
    PaginationClasses,
    PositionTypes,
    SIZES,
    SizeTypes,
} from "../../@types";
import {sprintf} from "sprintf-js";
import {ArrayRegexIncludes} from "../../../utils";

type PaginationLabels = {
    previous?: ReactNode;
    next?: ReactNode;
    ellipsis?: ReactNode;
};
type PaginationProps = {
    itemTotal: number;
    current?: number;
    labels?: PaginationLabels;
    style?: "rounded";
    position?: PositionTypes;
    size?: SizeTypes,
    classes?: PaginationClasses;
} & ({
    link: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>, page: number) => void;
} | {
    link?: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, page: number) => void;
});

export const Pagination = (
    {
        itemTotal,
        current = 1,
        labels = {},
        link,
        position = 'centered',
        style,
        size,
        classes = {},
        onClick,
    }: PaginationProps
) => {
    (['previous', 'next', 'ellipsis'] as Array<keyof PaginationLabels>)
        .forEach((k: keyof PaginationLabels) => {
            let defaultValue;
            switch (k) {
                case 'previous': defaultValue = <Fragment>Previous</Fragment>; break;
                case 'next': defaultValue = <Fragment>Next</Fragment>; break;
                case 'ellipsis': defaultValue = <Fragment>&hellip;</Fragment>; break;
            }
            if (labels[k] === undefined) {
                labels[k] = defaultValue;
            }
        });
    (['wrap', 'previous', 'next', 'list', 'link', 'ellipsis'] as Array<keyof PaginationClasses>)
        .forEach((k: keyof PaginationClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    if (classes.wrap) {
        if (!classes.wrap.includes('pagination')) {
            classes.wrap.push('pagination');
        }
        if (position) {
            const pattern = HORIZONTAL_POSITIONS.join('|');
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                    classes.wrap?.push('is-' + position);
                }
            }
        }
        if (style) {
            if (!classes.wrap.includes('rounded')) {
                classes.wrap?.push('is-rounded');
            }
        }
        if (size) {
            const pattern = SIZES.join('|');
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                    classes.wrap?.push('is-' + size);
                }
            }
        }
    }
    if (classes.previous && !classes.previous.includes('pagination-previous')) {
        classes.previous.push('pagination-previous');
    }
    if (classes.next && !classes.next.includes('pagination-next')) {
        classes.next.push('pagination-next');
    }
    if (classes.list && !classes.list.includes('pagination-list')) {
        classes.list.push('pagination-list');
    }
    if (classes.link && !classes.link.includes('pagination-link')) {
        classes.link.push('pagination-link');
    }
    if (classes.ellipsis && !classes.ellipsis.includes('pagination-ellipsis')) {
        classes.ellipsis.push('pagination-ellipsis');
    }
    const previousDisabled = current <= 1;
    const nextDisabled = current >= itemTotal;
    if (previousDisabled) {
        classes.previous?.push('is-disabled');
    }
    if (nextDisabled) {
        classes.next?.push('is-disabled');
    }
    return (
        <Fragment>
            <nav className={classes.wrap?.join(' ')} role="navigation" aria-label="pagination">
                <Fragment>
                    {
                        previousDisabled ? (
                            <span
                                className={classes.previous?.join(' ')}
                            >
                                {labels.previous}
                            </span>
                        ) : (
                            <a
                                className={classes.previous?.join(' ')}
                                href={link ? sprintf(link, current - 1) : undefined}
                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, current - 1) : undefined}
                            >
                                {labels.previous}
                            </a>
                        )
                    }
                </Fragment>
                <Fragment>
                    {
                        nextDisabled ? (
                            <span
                                className={classes?.next?.join(' ')}
                            >
                                {labels.next}
                            </span>
                        ) : (
                            <a
                                className={classes?.next?.join(' ')}
                                href={link ? sprintf(link, current + 1) : undefined}
                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, current + 1) : undefined}
                            >
                                {labels.next}
                            </a>
                        )
                    }
                </Fragment>
                <ul className={classes.list?.join(' ')}>
                    {
                        (function () {
                            const linkList: JSX.Element[] = [];
                            let idx: number = 0;
                            if (current - 2 >= 1) {
                                linkList.push((
                                    <Fragment key={"pagination-" + ++idx}>
                                        <li>
                                            <a
                                                className={classes.link?.join(' ')}
                                                href={link ? sprintf(link, 1) : undefined}
                                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, 1) : undefined}
                                            >
                                                1
                                            </a>
                                        </li>
                                    </Fragment>
                                ));
                                if (current - 3 >= 1) {
                                    linkList.push((
                                        <Fragment key={"pagination-" + ++idx}>
                                            <li>
                                                <span className={classes.ellipsis?.join(' ')}>{labels?.ellipsis}</span>
                                            </li>
                                        </Fragment>
                                    ));
                                }
                            }
                            if (current - 1 >= 1) {
                                linkList.push((
                                    <Fragment key={"pagination-" + ++idx}>
                                        <li>
                                            <a
                                                className={classes.link?.join(' ')}
                                                href={link ? sprintf(link, current - 1) : undefined}
                                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, current - 1) : undefined}
                                            >
                                                {current - 1}
                                            </a>
                                        </li>
                                    </Fragment>
                                ));
                            }
                            linkList.push((
                                <Fragment key={"pagination-" + ++idx}>
                                    <li>
                                        <span
                                            className={classes.link?.concat(['is-current']).join(' ')}
                                        >
                                            {current}
                                        </span>
                                    </li>
                                </Fragment>
                            ));
                            if (current + 1 <= itemTotal) {
                                linkList.push((
                                    <Fragment key={"pagination-" + ++idx}>
                                        <li>
                                            <a
                                                className={classes.link?.join(' ')}
                                                href={link ? sprintf(link, current + 1) : undefined}
                                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, current + 1) : undefined}
                                            >
                                                {current + 1}
                                            </a>
                                        </li>
                                    </Fragment>
                                ));
                            }
                            if (current + 2 <= itemTotal) {
                                if (current + 3 <= itemTotal) {
                                    linkList.push((
                                        <Fragment key={"pagination-" + ++idx}>
                                            <li>
                                                <span className={classes.ellipsis?.join(' ')}>{labels?.ellipsis}</span>
                                            </li>
                                        </Fragment>
                                    ));
                                }
                                linkList.push((
                                    <Fragment key={"pagination-" + ++idx}>
                                        <li>
                                            <a
                                                className={classes.link?.join(' ')}
                                                href={link ? sprintf(link, itemTotal) : undefined}
                                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, itemTotal) : undefined}
                                            >
                                                {itemTotal}
                                            </a>
                                        </li>
                                    </Fragment>
                                ));
                            }
                            return (<Fragment>{linkList}</Fragment>);
                        }())
                    }
                </ul>
            </nav>
        </Fragment>
    );
};
