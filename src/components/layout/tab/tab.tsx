import React, {Fragment} from "react";
import {
    CommonDataSet,
    HORIZONTAL_POSITIONS,
    TabsClasses,
    TabsItemFields,
    TabsProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Tab = (
    props: TabsProps
) => {
    const {
        items,
        position = 'centered',
        classes = {},
        attributes,
        datasets = new Map(),
    } = props;

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
                if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
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
