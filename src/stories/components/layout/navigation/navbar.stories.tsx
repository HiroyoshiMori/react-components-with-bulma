import React, {Fragment} from "react";
import {Navbar} from "../../../../components";

export default {
    component: Navbar,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Navbar
        ariaLabel='Navigation'
        menuId='navId'
        menus={{
            start: [
                {label: 'Menu 1', href: "#1"},
                {label: 'Menu 2', href: "#2"},
                {label: 'Menu 3', href: "#3"},
                {label: 'Menu 4', href: "#4"},
            ],
            end: [
                {label: 'Menu End 5', href: "#5"},
                {label: 'Menu End 6', href: "#6"},
            ],
        }}
        {...args}
    />,
};
export const Brand = {
    ...Default,
    args: {
        brand: {
            item: <Fragment>Brand</Fragment>,
            href: './',
        },
    },
};
export const HasChildren = {
    ...Default,
    args: {
        menus: {
            start: [
                {label: 'Menu 1', href: '#1'},
                {label: 'Menu 2', href: '#1'},
                {
                    label: 'Menu 3',
                    href: '#3',
                    children: [
                        {label: 'Menu 3-1', href: '#3-1'},
                        {label: 'Menu 3-2', href: '#3-2'},
                        {isDivider: true},
                        {label: 'Menu 3-3', href: '#3-3'},
                    ]
                },
                {label: 'Menu 4', href: '#4'},
            ]
        }
    },
};
export const HasGrandChildren = {
    ...Default,
    args: {
        menus: {
            start: [
                {label: 'Menu 1', href: '#1'},
                {label: 'Menu 2', href: '#1'},
                {
                    label: 'Menu 3',
                    href: '#3',
                    children: [
                        {label: 'Menu 3-1', href: '#3-1'},
                        {label: 'Menu 3-2', href: '#3-2'},
                        {isDivider: true},
                        {
                            label: 'Menu 3-3',
                            href: '#3-3',
                            children: [
                                {label: 'Not shown', href: '#NotShown'},
                            ],
                        },
                    ]
                },
                {label: 'Menu 4', href: '#4'},
            ]
        }
    },
};
export const FixedTop = {
    ...Default,
    args: {
        fixed: "top",
    },
};
export const FixedBottom = {
    ...Default,
    args: {
        fixed: "bottom",
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        brand: {
            item: <Fragment>Brand</Fragment>,
            href: './',
        },
        menus: {
            start: [
                {label: 'Menu 1', href: "#1", attributes: {'aria-label': 'Menu Item'}},
                {label: 'Menu 2', href: "#2", attributes: {'aria-label': 'Menu Item'}},
                {label: 'Menu 3', href: "#3", attributes: {'aria-label': 'Menu Item'}},
                {
                    label: 'Menu 4',
                    href: "#4",
                    attributes: {'aria-label': 'Menu Item'},
                    children: [
                        {label: 'Menu 4-1', href: "#4-1", attributes: {'aria-label': 'Menu Item Child'}},
                        {label: 'Menu 4-2', href: "#4-2", attributes: {'aria-label': 'Menu Item Child'}},
                        {isDivider: true},
                        {label: 'Menu 4-3', href: "#4-3", attributes: {'aria-label': 'Menu Item Child'}},
                    ],
                },
            ],
            end: [
                {label: 'Menu End 5', href: "#5", attributes: {'aria-label': 'Menu Item'}},
                {label: 'Menu End 6', href: "#6", attributes: {'aria-label': 'Menu Item'}},
            ],
        },
        attributes: {
            wrap: {'aria-label': 'Navbar'},
            brand: {'aria-label': 'Navbar Brand'},
            burger: {'aria-label': 'Navbar Burger'},
            menu: {'aria-label': 'Navbar Menu'},
            menuStart: {'aria-label': 'Navbar Menu Start'},
            menuEnd: {'aria-label': 'Navbar Menu End'},
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        brand: {
            item: <Fragment>Brand</Fragment>,
            href: './',
        },
        menus: {
            start: [
                {
                    label: 'Menu 1',
                    href: "#1",
                    datasets: new Map([
                        ['id', 'nav-menu-item-1'], ['name', 'nav menu item 1'],
                    ]),
                },
                {
                    label: 'Menu 2',
                    href: "#2",
                    datasets: new Map([
                        ['id', 'nav-menu-item-2'], ['name', 'nav menu item 2'],
                    ]),
                },
                {
                    label: 'Menu 3',
                    href: "#3",
                    datasets: new Map([
                        ['id', 'nav-menu-item-3'], ['name', 'nav menu item 3'],
                    ]),
                },
                {
                    label: 'Menu 4',
                    href: "#4",
                    datasets: new Map([
                        ['id', 'nav-menu-item-4'], ['name', 'nav menu item 4'],
                    ]),
                    children: [
                        {
                            label: 'Menu 4-1',
                            href: "#4-1",
                            datasets: new Map([
                                ['id', 'nav-menu-item-4-1'], ['name', 'nav menu item 4-1'],
                            ]),
                        },
                        {
                            label: 'Menu 4-2',
                            href: "#4-2",
                            datasets: new Map([
                                ['id', 'nav-menu-item-4-2'], ['name', 'nav menu item 4-2'],
                            ]),
                        },
                        {isDivider: true},
                        {
                            label: 'Menu 4-3',
                            href: "#4-3",
                            datasets: new Map([
                                ['id', 'nav-menu-item-4-3'], ['name', 'nav menu item 4-3'],
                            ]),
                        },
                    ],
                },
            ],
            end: [
                {
                    label: 'Menu 5',
                    href: "#5",
                    datasets: new Map([
                        ['id', 'nav-menu-item-5'], ['name', 'nav menu item 5'],
                    ]),
                },
                {
                    label: 'Menu 6',
                    href: "#6",
                    datasets: new Map([
                        ['id', 'nav-menu-item-6'], ['name', 'nav menu item 6'],
                    ]),
                },
            ],
        },
        datasets: {
            wrap: new Map([
                ['id', 'nav-wrap'], ['name', 'nav wrap'],
            ]),
            brand: new Map([
                ['id', 'nav-brand'], ['name', 'nav brand'],
            ]),
            burger: new Map([
                ['id', 'nav-burger'], ['name', 'nav burger'],
            ]),
            menu: new Map([
                ['id', 'nav-menu'], ['name', 'nav menu'],
            ]),
            menuStart: new Map([
                ['id', 'nav-menu-start'], ['name', 'nav menu start'],
            ]),
            menuEnd: new Map([
                ['id', 'nav-menu-end'], ['name', 'nav menu end'],
            ]),
        },
    },
};
