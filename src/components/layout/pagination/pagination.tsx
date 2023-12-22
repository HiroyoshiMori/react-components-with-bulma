import React, {Fragment} from "react";
import {sprintf} from "sprintf-js";
import {
    CommonDataSet,
    HORIZONTAL_POSITIONS,
    SIZES,
    PaginationAttributes,
    PaginationClasses,
    PaginationDatasets,
    PaginationLabels,
    PaginationProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

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
        classes = {},
        onClick,
        attributes = {},
        datasets = {},
    } = {...props};
    // Initialize if undefined and set default values if not already set
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
    // Initialize if undefined
    (['wrap', 'previous', 'next', 'list', 'link', 'ellipsis'] as Array<keyof PaginationClasses>)
        .forEach((k: keyof PaginationClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    (['wrap', 'list'] as Array<keyof PaginationAttributes>)
        .forEach((k: keyof PaginationAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'list'] as Array<keyof PaginationDatasets>)
        .forEach((k: keyof PaginationDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    // Set default values if not already set
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

    let datasetShown = {} as any;
    (['wrap', 'list'] as Array<keyof PaginationDatasets>)
        .forEach((k: keyof PaginationDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

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
