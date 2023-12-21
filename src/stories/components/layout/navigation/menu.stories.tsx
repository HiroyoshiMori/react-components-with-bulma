import React from 'react';
import {Menu} from "../../../../components";

export default {
    component: Menu,
    tags: ['autodocs'],
};
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
export const WithDatasets = {
    ...Default,
    args: {
        menus: [
            {
                label: 'Menu 1',
                datasets: {
                    list: new Map([
                        ['id', 'menu-list'], ['name', 'menu list'],
                    ]),
                    label: new Map([
                        ['id', 'menu-label'], ['name', 'menu label'],
                    ]),
                },
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
            },
        ],
        datasets: new Map([
            ['id', 'menu'], ['name', 'menu'],
        ]),
    },
};
