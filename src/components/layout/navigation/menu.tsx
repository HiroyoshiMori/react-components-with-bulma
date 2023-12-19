import React, {Fragment} from "react";
import {MenuClasses, MenuFields, MenuItemFields} from "../../@types";

export type MenuProps = {
    menus: MenuFields[];
    classes?: MenuClasses;
};

export const Menu = (
    {
        menus,
        classes = {},
    }: MenuProps
) => {
    (['wrap', 'label', 'list', 'item'] as Array<keyof MenuClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
        if (classes[k]) {
            let checkStyle;
            switch (k) {
                case 'wrap': checkStyle = 'menu'; break;
                case 'label': checkStyle = 'menu-label'; break;
                case 'list': checkStyle = 'menu-list'; break;
            }
            if (checkStyle && !classes[k]?.includes(checkStyle)) {
                classes[k]?.push(checkStyle);
            }
        }
    });
    const renderListItem = (item: MenuItemFields, hierarchy: number = 0) => {
        return (
            <Fragment>
                <li className={classes.item?.join(' ')}>{item.content}</li>
                {
                    item.children && item.children.length > 0 && (
                        <Fragment>
                            <ul>
                                {
                                    item.children.map((child: MenuItemFields, idx: number) => (
                                        <Fragment key={"menu-" + idx}>
                                            {renderListItem(child, hierarchy+1)}
                                        </Fragment>
                                    ))
                                }
                            </ul>
                        </Fragment>
                    )
                }
            </Fragment>
        );
    }
    return (
        <Fragment>
            <aside className={classes.wrap?.join(' ')}>
                {
                    menus && menus.length > 0 && menus.map((item: MenuFields, idx: number) => {
                        return (
                            <Fragment key={"menu-" + idx}>
                                <p className={classes.label?.join(' ')}>{item.label}</p>
                                {
                                    item.list && item.list.length > 0 && (
                                        <Fragment>
                                            <ul className={classes.list?.join(' ')}>
                                                {
                                                    item.list.map((listItem: MenuItemFields, i: number) => (
                                                        <Fragment key={"menu-item-" + i}>
                                                            {renderListItem(listItem)}
                                                        </Fragment>
                                                    ))
                                                }
                                            </ul>
                                        </Fragment>
                                    )
                                }
                            </Fragment>
                        );
                    })
                }
            </aside>
        </Fragment>
    );
};
