import React, {Fragment, HTMLAttributes} from "react";
import {
    NavbarAttributes,
    NavbarClasses,
    NavbarDatasets,
    NavbarItemFields,
    NavbarProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Navbar = (
    props: NavbarProps
) => {
    const {
        ariaLabel = '',
        menuId,
        menus = {
            start: [],
            end: [],
        },
        brand,
        fixed,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as NavbarAttributes, [
            'wrap', 'brand', 'burger', 'menu', 'menuStart', 'menuEnd'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as NavbarDatasets, [
            'wrap', 'brand', 'burger', 'menu', 'menuStart', 'menuEnd'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as NavbarClasses, [
            'wrap', 'brand', 'burger', 'menu', 'menuStart', 'menuEnd',
            'link', 'item','dropdown', 'divider'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap':
                    defaultValue = 'navbar'; break;
                case 'brand':
                    defaultValue = 'navbar-brand'; break;
                case 'burger':
                    defaultValue = 'navbar-burger'; break;
                case 'menu':
                    defaultValue = 'navbar-menu'; break;
                case 'menuStart':
                    defaultValue = 'navbar-start'; break;
                case 'menuEnd':
                    defaultValue = 'navbar-end'; break;
                case 'link':
                    defaultValue = 'navbar-link'; break;
                case 'item':
                    defaultValue = 'navbar-item'; break;
                case 'dropdown':
                    defaultValue = 'navbar-dropdown'; break;
                case 'divider':
                    defaultValue = 'navbar-divider'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (fixed && classes.wrap && ArrayRegexIncludes(classes.wrap, /^is-fixed-(top|bottom)$/) === -1) {
        classes.wrap?.push('is-fixed-' + fixed);
    }
    if (attributes.wrap) {
        (['aria-label', 'role'] as Array<keyof HTMLAttributes<HTMLElement>>)
            .forEach((k: keyof HTMLAttributes<HTMLElement>) => {
                let defaultValue;
                switch (k) {
                    case 'aria-label':
                        defaultValue = ariaLabel; break;
                    case 'role':
                        defaultValue = 'navigation'; break;
                }
                if (attributes.wrap && !Object.hasOwn(attributes.wrap, k as PropertyKey)) {
                    attributes.wrap[k] = defaultValue;
                }
            });
    }
    if (attributes.burger) {
        (['aria-label', 'aria-expanded', 'role'] as Array<keyof HTMLAttributes<HTMLAnchorElement>>)
            .forEach((k: keyof HTMLAttributes<HTMLAnchorElement>) => {
            let defaultValue;
            switch (k) {
                case 'aria-label':
                    defaultValue = 'menu'; break;
                case 'aria-expanded':
                    defaultValue = 'false'; break;
                case 'role':
                    defaultValue = 'button'; break;
            }
            if (attributes.burger && !Object.hasOwn(attributes.burger, k as PropertyKey)) {
                attributes.burger[k] = defaultValue;
            }
        });
    }
    if (datasets.burger) {
        if (!datasets.burger.has('target')) {
            datasets.burger.set('target', menuId);
        }
    }

    /**
     * Recursive function to render items
     * @param item Navbar Items
     * @param hierarchy # of hierarchy
     */
    const renderItem = (item: NavbarItemFields, hierarchy: number = 0) => {
        item.attributes = item.attributes ?? {};
        item.datasets = item.datasets ?? new Map();
        const itemClasses = classes.item ?
            classes.item.concat(item.classes ?? []) : (item.classes ?? []);
        const itemDatasetShown = convertDataSet(item.datasets);
        if (item.isDivider) {
            // Render divider if isDivider is true
            return (
                <hr className={classes.divider?.join(' ')} {...item.attributes} />
            );
        } else if (hierarchy < 1 && item.children && item.children.length > 0) {
            // Render item and call this function to render children
            return (
                <Fragment>
                    <div
                        className={itemClasses.concat(['has-dropdown', 'is-hoverable']).join(' ')}
                    >
                        <a
                            className={classes.link?.join(' ')}
                            href={item.href} onClick={item.onClick}
                            {...item.attributes}
                            {...itemDatasetShown}
                        >
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
            // Render item
            return (
                <Fragment>
                    <a
                        className={itemClasses.join(' ')} href={item.href} onClick={item.onClick}
                        {...item.attributes}
                        {...itemDatasetShown}
                    >
                        {item.label}
                    </a>
                </Fragment>
            );
        }
    };

    return (
        <Fragment>
            <nav
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                {
                    brand && (
                        <Fragment>
                            <div
                                className={classes.brand?.join(' ')}
                                {...attributes.brand}
                                {...datasetShown.brand}
                            >
                                <a className={classes.item?.join(' ')} href={brand?.href}>
                                    {brand.item}
                                </a>
                                {
                                    ((menus.start && menus.start.length > 0) || (menus.end && menus.end.length > 0)) && (
                                        <Fragment>
                                            <a
                                                className={classes.burger?.join(' ')}
                                                {...attributes.burger}
                                                {...datasetShown.burger}
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
                <div
                    id={menuId}
                    className={classes.menu?.join(' ')}
                    {...attributes.menu}
                    {...datasetShown.menu}
                >
                    {
                        (menus.start && menus.start.length > 0) && (
                            <Fragment>
                                <div
                                    className={classes?.menuStart?.join(' ')}
                                    {...attributes.menuStart}
                                    {...datasetShown.menuStart}
                                >
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
                                <div
                                    className={classes.menuEnd?.join(' ')}
                                    {...attributes.menuEnd}
                                    {...datasetShown.menuEnd}
                                >
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
