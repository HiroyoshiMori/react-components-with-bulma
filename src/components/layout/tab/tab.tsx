import React, {Fragment, HTMLAttributes} from "react";
import {CommonDataSet, HORIZONTAL_POSITIONS, PositionTypes, TabsClasses, TabsItemFields} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

type TabsProps = {
    items: TabsItemFields[],
    position?: PositionTypes,
    classes?: TabsClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};

export const Tab = (
    props: TabsProps
) => {
    const {
        items,
        position = 'centered',
        classes = {},
        attributes,
        datasets = new Map(),
    } = {...props};
    // Initialize if undefined
    (['wrap', 'item'] as Array<keyof TabsClasses>).forEach((k: keyof TabsClasses) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    // Set default values if not already set
    if (classes.wrap) {
        if (!classes.wrap?.includes('tabs')) {
            classes.wrap?.push('tabs');
        }
        if (position) {
            const pattern: string = HORIZONTAL_POSITIONS.join('|');
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                    classes.wrap?.push('is-' + position);
                }
            }
        }
    }
    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes}
                {...dataShown}
            >
                <ul>
                    {
                        items && items.map((item: TabsItemFields, idx: number) => {
                            const itemClasses: string[] = (classes?.item) ?
                                classes.item.concat(item.classes ?? []) : (item.classes ?? []);
                            if (item.isActive) {
                                itemClasses.push('is-active');
                            }
                            item.datasets = item.datasets ?? new Map();
                            const itemDataShown = convertDataSet(item.datasets as CommonDataSet);
                            return (
                                <Fragment key={"tab-item-"+idx}>
                                    <li
                                        className={itemClasses.join(' ')}
                                        {...item.attributes}
                                        {...itemDataShown}
                                    >
                                        <a href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                </Fragment>
                            );
                        })
                    }
                </ul>
            </div>
        </Fragment>
    );
};
