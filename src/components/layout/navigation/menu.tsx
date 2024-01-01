import React, {Fragment} from "react";
import {
    CommonDataSet,
    MenuAttributes,
    MenuClasses,
    MenuDatasets,
    MenuFields,
    MenuItemFields,
    MenuProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Menu = (
    props: MenuProps
) => {
    const {
        menus,
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined && set default values if not already set
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
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    /**
     * Recursive function to render menu items
     * @param item Items in menu
     * @param hierarchy # of hierarchy
     */
    const renderListItem = (item: MenuItemFields, hierarchy: number = 0) => {
        // Initialize if undefined
        item.attributes = item.attributes ?? {};
        item.datasets = item.datasets ?? new Map();
        const itemDatasetShown = convertDataSet(item.datasets as CommonDataSet);
        return (
            <Fragment>
                <li
                    className={classes.item?.join(' ')}
                    {...item.attributes}
                    {...itemDatasetShown}
                >
                    {item.content}
                </li>
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
            <aside
                className={classes.wrap?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    menus && menus.length > 0 && menus.map((item: MenuFields, idx: number) => {
                        // Initialize if undefined
                        item.attributes = item.attributes ?? {};
                        item.datasets = item.datasets ?? {};
                        (['list', 'label'] as Array<keyof MenuAttributes>).forEach((k: keyof MenuAttributes) => {
                            if (item.attributes && item.attributes[k] === undefined) {
                                item.attributes[k] = {};
                            }
                        });
                        let itemDatasetShown = {} as any;
                        (['list', 'label'] as Array<keyof MenuDatasets>).forEach((k: keyof MenuDatasets) => {
                            if (item.datasets) {
                                if (item.datasets[k] === undefined) {
                                    item.datasets[k] = new Map();
                                }
                                itemDatasetShown[k] = convertDataSet(item.datasets[k] as CommonDataSet);
                            }
                        });
                        return (
                            <Fragment key={"menu-" + idx}>
                                <p
                                    className={classes.label?.join(' ')}
                                    {...item.attributes?.label}
                                    {...itemDatasetShown.label}
                                >
                                    {item.label}
                                </p>
                                {
                                    item.list && item.list.length > 0 && (
                                        <Fragment>
                                            <ul className={classes.list?.join(' ')} {...item.attributes?.list}>
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
