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
import {initialize} from "../../common";

export const Menu = (
    props: MenuProps
) => {
    const {
        menus,
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as MenuClasses, [
            'wrap', 'label', 'list', 'item'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'menu'; break;
                case 'label': defaultValue = 'menu-label'; break;
                case 'list': defaultValue = 'menu-list'; break;
            }
            return defaultValue;
        }
    );
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
        const itemClasses = classes.item
            ? classes.item.concat(item.classes ?? []) : (item.classes ?? []);
        const itemDatasetShown = convertDataSet(item.datasets as CommonDataSet);
        return (
            <Fragment>
                <li
                    className={itemClasses.join(' ')}
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
                                    item.list && item.list.length > 0 && function() {
                                        item.datasets.list = item.datasets?.list ?? new Map();
                                        const itemDatasetShown = convertDataSet(item.datasets.list as CommonDataSet);
                                        return (
                                            <Fragment>
                                                <ul
                                                    className={classes.list?.join(' ')}
                                                    {...item.attributes?.list}
                                                    {...itemDatasetShown}
                                                >
                                                    {
                                                        item.list.map((listItem: MenuItemFields, i: number) => (
                                                            <Fragment key={"menu-item-" + i}>
                                                                {renderListItem(listItem)}
                                                            </Fragment>
                                                        ))
                                                    }
                                                </ul>
                                            </Fragment>
                                        );
                                    }()
                                }
                            </Fragment>
                        );
                    })
                }
            </aside>
        </Fragment>
    );
};
