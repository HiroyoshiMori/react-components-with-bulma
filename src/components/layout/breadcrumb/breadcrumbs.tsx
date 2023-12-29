import React, {Fragment} from "react";
import {
    HORIZONTAL_POSITIONS,
    SEPARATORS,
    SIZES,
    CommonDataSet,
    BreadcrumbClasses,
    BreadcrumbItemFields,
    BreadcrumbProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Breadcrumbs = (props: BreadcrumbProps) => {
    const {
        items,
        position = 'centered',
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    (['wrap', 'item'] as Array<keyof BreadcrumbClasses>)
        .forEach((k: keyof BreadcrumbClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    // Set default values if not already set
    if (classes.wrap) {
        if (!classes.wrap.includes('breadcrumb')) {
            classes.wrap.push('breadcrumb');
        }
        (['position', 'separator', 'size'] as Array<keyof BreadcrumbProps>)
            .forEach((k: keyof BreadcrumbProps) => {
            if (classes.wrap) {
                let pattern: string;
                let reg: string = '';
                switch (k) {
                    case 'position':
                        pattern = HORIZONTAL_POSITIONS.join('|');
                        reg = `^is-(${pattern})$`;
                        if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                            classes.wrap?.push('is-' + position);
                        }
                        break;
                    case 'separator':
                        pattern = SEPARATORS.join('|');
                        reg = `^has-(${pattern})-separator$`;
                        if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                            classes.wrap?.push('has-' + props[k] + '-separator');
                        }
                        break;
                    case 'size':
                        pattern = SIZES.join('|');
                        reg = `^is-(${pattern})$`;
                        if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                            classes.wrap?.push('is-' + props[k]);
                        }
                        break;
                }
            }
        });
    }
    if (!Object.hasOwn(attributes, 'aria-label')) {
        attributes['aria-label'] = 'breadcrumbs';
    }
    const datasetShown = convertDataSet(datasets as CommonDataSet);


    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                <ul>
                    {
                        items && items.map((item: BreadcrumbItemFields, idx: number) => {
                            // Initialize if undefined
                            item.attributes = item.attributes ?? {};
                            item.datasets = item.datasets ?? new Map();
                            const itemClasses: string[] = classes.item ?
                                classes.item?.concat(item.classes ?? []) : (item.classes ?? []);
                            if (item.isActive) {
                                itemClasses.push('is-active');
                            }
                            const itemDatasetShown = convertDataSet(item.datasets as CommonDataSet);
                            return (
                                <Fragment key={"breadcrumb-item-" + idx}>
                                    <li
                                        className={itemClasses.join(' ')}
                                        onClick={item.onClick}
                                        {...item.attributes}
                                        {...itemDatasetShown}
                                    >
                                        {item.label}
                                    </li>
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
};
