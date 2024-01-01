import React, {
    AnchorHTMLAttributes,
    Fragment,
} from "react";
import {
    CommonDataSet,
    DropdownAttributes,
    DropdownClasses,
    DropdownContentProps,
    DropdownDatasets,
    DropdownItemProps,
    DropdownProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {Button} from "../../element";

export const Dropdown = (props: DropdownProps) => {
    const {
        menuId,
        trigger,
        items,
        classes = {},
        attributes = {},
        datasets = {},
    } = {...props};

    // Initialize if undefined
    (['wrap', 'trigger', 'menu', 'content', 'item', 'divider'] as Array<keyof DropdownAttributes>)
        .forEach((k: keyof DropdownAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
            let key: string | undefined;
            let val: string | undefined;
            switch (k) {
                case 'menu': key = 'role'; val = 'menu'; break;
            }
            // @ts-ignore
            if (key && !Object.hasOwn(attributes[k], 'role')) {
                // @ts-ignore
                attributes[k]['role'] = val;
            }
        });
    (['wrap', 'trigger', 'menu', 'content', 'item', 'divider'] as Array<keyof DropdownDatasets>)
        .forEach((k: keyof DropdownDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['wrap', 'trigger', 'menu', 'content', 'item', 'divider'] as Array<keyof DropdownClasses>)
        .forEach((k: keyof DropdownClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let key: string | undefined;
            switch (k) {
                case 'wrap': key = 'dropdown'; break;
                case 'trigger': key = 'dropdown-trigger'; break;
                case 'menu': key = 'dropdown-menu'; break;
                case 'content': key = 'dropdown-content'; break;
                case 'item': key = 'dropdown-item'; break;
                case 'divider': key = 'dropdown-divider'; break;
            }
            if (key && !classes[k]?.includes(key)) {
                classes[k]?.push(key);
            }
        });
    if (trigger.attributes === undefined) {
        trigger.attributes = {};
    }

    // Set default values if not already set
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

    let datasetShown = {} as any;
    (['wrap', 'trigger', 'menu', 'content', 'item', 'divider'] as Array<keyof DropdownDatasets>)
        .forEach((k: keyof DropdownDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });

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
                                return (
                                    <DropdownItem
                                        key={idx}
                                        {...item}
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
