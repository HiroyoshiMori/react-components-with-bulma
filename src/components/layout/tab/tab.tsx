import React, {Fragment} from "react";
import {HORIZONTAL_POSITIONS, PositionTypes, TabsClasses, TabsItemFields} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";

type TabsProps = {
    items: TabsItemFields[],
    position?: PositionTypes,
    classes?: TabsClasses;
};

export const Tab = (
    {
        items,
        position = 'centered',
        classes = {}
    }: TabsProps
) => {
    (['wrap', 'item'] as Array<keyof TabsClasses>).forEach((k: keyof TabsClasses) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
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

    return (
        <Fragment>
            <div className={classes.wrap?.join(' ')}>
                <ul>
                    {
                        items && items.map((item: TabsItemFields, idx: number) => {
                            const itemClasses: string[] = (classes?.item) ?
                                classes.item.concat(item.classes ?? []) : (item.classes ?? []);
                            if (item.isActive) {
                                itemClasses.push('is-active');
                            }
                            return (
                                <Fragment key={"tab-item-"+idx}>
                                    <li
                                        className={itemClasses.join(' ')}
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
