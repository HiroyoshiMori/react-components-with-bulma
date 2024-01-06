import React, {Fragment, ReactNode} from "react";
import {sprintf} from "sprintf-js";
import {
    HORIZONTAL_POSITIONS,
    SIZES,
    PaginationAttributes,
    PaginationClasses,
    PaginationDatasets,
    PaginationLabels,
    PaginationProps,
} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Pagination = (
    props: PaginationProps
) => {
    const {
        itemTotal,
        current = 1,
        labels = {},
        link,
        position = 'centered',
        style,
        size,
        onClick,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as PaginationAttributes, [
            'wrap', 'list'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as PaginationDatasets, [
            'wrap', 'list'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as PaginationClasses, [
            'wrap', 'previous', 'next', 'list', 'link', 'ellipsis'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'pagination'; break;
                case 'previous': defaultValue = 'pagination-previous'; break;
                case 'next': defaultValue = 'pagination-next'; break;
                case 'list': defaultValue = 'pagination-list'; break;
                case 'link': defaultValue = 'pagination-link'; break;
                case 'ellipsis': defaultValue = 'pagination-ellipsis'; break;
            }
            return defaultValue;
        }
    );
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

    // Set default values if not already set
    if (classes.wrap) {
        if (position) {
            const pattern = HORIZONTAL_POSITIONS.join('|');
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
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
                if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                    classes.wrap?.push('is-' + size);
                }
            }
        }
    }

    if (attributes.wrap && (!Object.hasOwn(attributes.wrap, 'role') || attributes.wrap.role === '')) {
        attributes.wrap.role = 'navigation';
    }
    if (attributes.wrap && (!Object.hasOwn(attributes.wrap, 'aria-label') || attributes.wrap["aria-label"] === '')) {
        attributes.wrap["aria-label"] = 'navigation';
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
            <nav
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
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
                                aria-label={"Pagination Link. Jump to previous page"}
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
                                aria-label={"Pagination Link. Jump to next page"}
                            >
                                {labels.next}
                            </a>
                        )
                    }
                </Fragment>
                <ul
                    className={classes.list?.join(' ')}
                    {...attributes.list}
                    {...datasetShown.list}
                >
                    {
                        (function () {
                            const linkList: ReactNode[] = [];
                            let idx: number = 0;
                            if (current - 2 >= 1) {
                                linkList.push((
                                    <Fragment key={"pagination-" + ++idx}>
                                        <li>
                                            <a
                                                className={classes.link?.join(' ')}
                                                href={link ? sprintf(link, 1) : undefined}
                                                onClick={onClick ? (e: React.MouseEvent<HTMLAnchorElement>) => onClick(e, 1) : undefined}
                                                aria-label={"Pagination Link. Jump to page " + 1}
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
                                                aria-label={"Pagination Link. Jump to page " + (current - 1)}
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
                                                aria-label={"Pagination Link. Jump to page " + (current + 1)}
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
                                                aria-label={"Pagination Link. Jump to last page"}
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
