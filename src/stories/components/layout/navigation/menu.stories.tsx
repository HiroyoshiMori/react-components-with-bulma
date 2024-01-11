import React from 'react';
import {Menu} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Menu',
    component: Menu,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Menu - Navigation',
        docs: {
            description: {
                component: 'This component renders menu.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/components/menu/',
            },
        },
    },
    argTypes: {
        menus: {
            control: 'object',
            description: 'Menu items',
            table: {
                type: {
                    summary: 'MenuFields[]',
                    detail: deIndent(`
                            {
                                label: ReactNode;
                                list?: {
                                    content: ReactNode;
                                    children?: MenuItemFields[];
                                    classes?: string[],
                                    attributes?: HTMLAttributes<HTMLLIElement>;
                                    datasets?: CommonDataSet;
                                }[] as MenuItemFields[];
                                classes?: string[],
                                attributes?: MenuAttributes;
                                datasets?: MenuDatasets;
                            }
                        `),
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for menu',
            table: {
                type: {
                    summary: 'MenuClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[];
                                label?: string[];
                                list?: string[];
                                item?: string[];
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for menu',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLAreaElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for menu. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'DATA_ID'],
                                ['name', 'DATA NAME'],
                            ])
                            → data-id="DATA_ID" data-name="DATA NAME"
                        `),
                },
                defaultValue: {
                    summary: 'new Map()',
                },
            },
        },
    }
};
/**
 * Default menu
 */
export const Default = {
    render: (args: any) => <Menu
        menus={[
            {
                label: 'Menu 1',
                list: [
                    {
                        content: 'Menu1-1',
                        children: [{content: 'Menu1-1-1'}],
                    },
                ],
            },
        ]}
        {...args}
    />,
};
/**
 * Menu with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        menus: [
            {
                label: 'Menu 1',
                classes: {
                    list: ['test-menu-list'],
                    label: ['test-menu-label'],
                },
                list: [
                    {
                        content: 'Menu1-1',
                        classes: ['test-list'],
                        children: [{
                            content: 'Menu1-1-1',
                            classes: ['test-list-children'],
                        }],
                    },
                ],
            },
        ],
        classes: {
            wrap: ['text-wrap'],
            label: ['test-label'],
            list: ['test-list'],
            item: ['test-item']
        },
    },
};
/**
 * Menu with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        menus: [
            {
                label: 'Menu 1',
                attributes: {
                    list: {'aria-label': 'Menu List'},
                    label: {'aria-label': 'Menu Label'},
                },
                list: [
                    {
                        content: 'Menu1-1',
                        attributes: {'aria-label': 'Menu Item'},
                        children: [{
                            content: 'Menu1-1-1',
                            attributes: {
                                'aria-label': 'Menu Item Child'
                            },
                        }],
                    },
                ],
            },
        ],
        attributes: {
            'aria-label': 'Menu',
        },
    },
};
/**
 * Menu with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        menus: [
            {
                label: 'Menu 1',
                list: [
                    {
                        content: 'Menu1-1',
                        datasets: new Map([
                            ['id', 'menu-item'], ['name', 'menu item'],
                        ]),
                        children: [{
                            content: 'Menu1-1-1',
                            datasets: new Map([
                                ['id', 'menu-item-child'], ['name', 'menu item child'],
                            ]),
                        }],
                    },
                ],
                datasets: {
                    list: new Map([
                        ['id', 'menu-list'], ['name', 'menu list'],
                    ]),
                    label: new Map([
                        ['id', 'menu-label'], ['name', 'menu label'],
                    ]),
                },
            },
        ],
        datasets: new Map([
            ['id', 'menu'], ['name', 'menu'],
        ]),
    },
};
