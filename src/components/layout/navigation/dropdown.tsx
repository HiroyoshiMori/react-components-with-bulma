import React, {
    AnchorHTMLAttributes,
    Fragment, HTMLAttributes,
} from "react";
import {
    DropdownAttributes,
    DropdownClasses,
    DropdownContentProps,
    DropdownDatasets,
    DropdownItemProps,
    DropdownProps,
} from "../../@types";
import {convertDataSet, generateId} from "../../../utils";
import {Button} from "../../element";
import {initialize, initializeDatasets} from "../../common";

export const Dropdown = (props: DropdownProps) => {
    const {
        menuId = generateId(),
        trigger,
        items,
    } = {...props};

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as DropdownAttributes, [
            'wrap', 'trigger', 'menu', 'content', 'item', 'divider'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as DropdownDatasets, [
            'wrap', 'trigger', 'menu', 'content', 'item', 'divider'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as DropdownClasses, [
            'wrap', 'trigger', 'menu', 'content', 'item', 'divider'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'dropdown'; break;
                case 'trigger': defaultValue = 'dropdown-trigger'; break;
                case 'menu': defaultValue = 'dropdown-menu'; break;
                case 'content': defaultValue = 'dropdown-content'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (attributes.menu && !Object.hasOwn(attributes.menu, 'role')) {
        attributes.menu['role'] = 'menu';
    }
    if (trigger.attributes === undefined) {
        trigger.attributes = {};
    }
    if (trigger.attributes) {
        if (!Object.hasOwn(trigger.attributes, 'aria-controls')) {
            trigger.attributes['aria-controls'] = menuId;
        }
        if (!Object.hasOwn(trigger.attributes, 'aria-haspopup')) {
            trigger.attributes['aria-haspopup'] = 'true';
        }
    }
    if (attributes.menu) {
        attributes.menu.id = trigger.attributes['aria-controls'];
    }

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <div
                    className={classes.trigger?.join(' ')}
                    {...attributes.trigger}
                    {...datasetShown.trigger}
                >
                    <Button {...trigger} />
                </div>
                <div
                    className={classes.menu?.join(' ')}
                    {...attributes.menu}
                    {...datasetShown.menu}
                >
                    <div
                        className={classes.content?.join(' ')}
                        {...attributes.content}
                        {...datasetShown.content}
                    >
                        {
                            items && items.length > 0 && items.map((item: DropdownContentProps, idx: number) => {
                                const itemClasses = Object.hasOwn(item, 'isDivider')
                                    ? classes.divider ? classes.divider.concat(item.classes ?? []) : (item.classes ?? [])
                                    : classes.item ? classes.item.concat(item.classes ?? []) : (item.classes ?? []);
                                item.attributes = item.attributes ?? {};
                                item.datasets = item.datasets ?? new Map();
                                if (Object.hasOwn(item, 'isDivider')) {
                                    item.attributes = attributes.divider
                                        ? {...attributes.divider, ...item.attributes as HTMLAttributes<HTMLHeadingElement>} : item.attributes as HTMLAttributes<HTMLHeadingElement>;
                                    item.datasets = datasets.divider
                                        ? new Map([...datasets.divider, ...item.datasets]) : item.datasets;
                                } else {
                                    // @ts-ignore
                                    item.attributes = attributes.item
                                        ? {
                                            ...attributes.item,
                                            ...(item.attributes as HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>)
                                        } : (item.attributes as HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>);
                                    item.datasets = datasets.item
                                        ? new Map([...datasets.item, ...item.datasets]) : item.datasets;
                                }
                                return (
                                    <DropdownItem
                                        key={idx}
                                        {...item}
                                        classes={itemClasses}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const DropdownItem = (props: DropdownContentProps) => {
    const {
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Define prop type whether divider or not
    const isDivider = (Object.hasOwn(props, 'isDivider'));

    // Set default value if not already set
    if (isDivider && !classes.includes('dropdown-divider')) {
        classes.push('dropdown-divider');
    } else if (!classes.includes('dropdown-item')) {
        classes.push('dropdown-item');
    }

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            {
                isDivider ? (
                    <Fragment>
                        <hr
                            className={classes.join(' ')}
                            {...attributes}
                            {...datasetShown}
                        />
                    </Fragment>
                ) : function () {
                    const item: DropdownItemProps = props as DropdownItemProps;
                    const Tag: React.ElementType = item.tag;
                    switch (item.tag) {
                        case 'a':
                            (attributes as AnchorHTMLAttributes<HTMLAnchorElement>).href = item.href; break;
                    }
                    return (
                        <Fragment>
                            <Tag
                                className={classes?.join(' ')}
                                {...attributes}
                                {...datasetShown}
                                onClick={item.onClick}
                            >
                                {item.children}
                            </Tag>
                        </Fragment>
                    );
                }()
            }
        </Fragment>
    );
};
