import React, {Fragment, ReactNode} from "react";
import { NavbarClasses, NavbarItemFields } from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";


type NavbarProps = {
    ariaLabel: string;
    menuId: string;
    menus: {
        start?: NavbarItemFields[],
        end?: NavbarItemFields[],
    };
    brand?: {
        item: ReactNode,
        href?: string,
    };
    fixed?: "top" | "bottom";
    classes?: NavbarClasses;
};

export const Navbar = (
    {
        ariaLabel = '',
        menuId,
        menus = {
            start: [],
            end: [],
        },
        brand,
        fixed,
        classes = {}
    }: NavbarProps
) => {
    (['wrap', 'brand', 'burger', 'menu', 'menuStart', 'menuEnd', 'link', 'item','dropdown', 'divider'] as Array<keyof NavbarClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
        if (classes[k]) {
            let checkClass;
            switch (k) {
                case 'wrap':
                    checkClass = 'navbar'; break;
                case 'brand':
                    checkClass = 'navbar-brand'; break;
                case 'burger':
                    checkClass = 'navbar-burger'; break;
                case 'menu':
                    checkClass = 'navbar-menu'; break;
                case 'menuStart':
                    checkClass = 'navbar-start'; break;
                case 'menuEnd':
                    checkClass = 'navbar-end'; break;
                case 'link':
                    checkClass = 'navbar-link'; break;
                case 'item':
                    checkClass = 'navbar-item'; break;
                case 'dropdown':
                    checkClass = 'navbar-dropdown'; break;
                case 'divider':
                    checkClass = 'navbar-divider'; break;
            }
            if (checkClass && !classes[k]?.includes(checkClass)) {
                classes[k]?.push(checkClass);
            }
        }
    });
    if (fixed && classes.wrap && !ArrayRegexIncludes(classes.wrap, /^is-fixed-(top|bottom)$/)) {
        classes.wrap?.push('is-fixed-' + fixed);
    }

    const renderItem = (item: NavbarItemFields, hierarchy: number = 0) => {
        const itemClasses = classes.item ?
            classes.item.concat(item.classes ?? []) : (item.classes ?? []);
        if (item.isDivider) {
            return (
                <hr className={classes.divider?.join(' ')}/>
            );
        } else if (hierarchy < 1 && item.children && item.children.length > 0) {
            return (
                <Fragment>
                    <div className={itemClasses.concat(['has-dropdown', 'is-hoverable']).join(' ')}>
                        <a className={classes.link?.join(' ')} href={item.href} onClick={item.onClick}>
                            {item.label}
                        </a>
                        <div className={classes?.dropdown?.join(' ')}>
                            {
                                item.children && item.children.map((item: NavbarItemFields, idx: number) => (
                                    <Fragment key={"navbar-item-" + idx}>
                                        {renderItem(item, hierarchy+1)}
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <a className={itemClasses.join(' ')} href={item.href} onClick={item.onClick}>
                        {item.label}
                    </a>
                </Fragment>
            );
        }
    }

    return (
        <Fragment>
            <nav className={classes.wrap?.join(' ')} role="navigation" aria-label={ariaLabel}>
                {
                    brand && (
                        <Fragment>
                            <div className={classes.brand?.join(' ')}>
                                <a className={classes.item?.join(' ')} href={brand?.href}>
                                    {brand.item}
                                </a>
                                {
                                    ((menus.start && menus.start.length > 0) || (menus.end && menus.end.length > 0)) && (
                                        <Fragment>
                                            <a
                                                role="button"
                                                className={classes.burger?.join(' ')}
                                                aria-label="menu"
                                                aria-expanded="false"
                                                data-target={menuId}
                                            >
                                                <span aria-hidden="true"></span>
                                                <span aria-hidden="true"></span>
                                                <span aria-hidden="true"></span>
                                            </a>
                                        </Fragment>
                                    )
                                }
                            </div>
                        </Fragment>
                    )
                }
                <div id={menuId} className={classes.menu?.join(' ')}>
                    {
                        (menus.start && menus.start.length > 0) && (
                            <Fragment>
                                <div className={classes?.menuStart?.join(' ')}>
                                    {
                                        menus.start.map((item: NavbarItemFields, idx: number) => (
                                            <Fragment key={"navbar-item-" + idx}>
                                                {renderItem(item)}
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </Fragment>
                        )
                    }
                    {
                        (menus.end && menus.end.length > 0) && (
                            <Fragment>
                                <div className={classes.menuEnd?.join(' ')}>
                                    {
                                        menus.end.map((item: NavbarItemFields, idx: number) => (
                                            <Fragment key={"menu-item-" + idx}>
                                                {renderItem(item)}
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </Fragment>
                        )
                    }
                </div>
            </nav>
        </Fragment>
    );
};
