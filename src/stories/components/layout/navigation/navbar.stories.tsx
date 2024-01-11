import React, {Fragment} from "react";
import {Navbar} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Navbar - Navigation',
        docs: {
            description: {
                component: 'This component renders navbar.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/components/navbar/',
            },
        },
    },
    argTypes: {
        ariaLabel: {
            control: 'text',
            description: 'aria-label for navbar',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        menuId: {
            control: 'text',
            description: 'ID for navbar menu',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'Random string ID will be generated when undefined',
                },
            },
        },
        menus: {
            control: 'object',
            description: 'Menu Items in navbar',
            table: {
                type: {
                    summary: deIndent(`
                            {
                                start?: NavbarItemFields[],
                                end?: NavbarItemFields[],
                            }
                        `),
                    detail: deIndent(`
                            {
                                start?: {
                                    label: ReactNode;
                                    isDivider?: boolean;
                                    href?: string;
                                    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
                                    children?: NavbarItemFields[];
                                    classes?: string[],
                                    attributes?: HTMLAttributes<HTMLDivElement | HTMLHeadingElement | HTMLAnchorElement>;
                                    datasets?: Map<string, string>;
                                }[] as NavbarItemFields[],
                                end?: NavbarItemFields[],
                            }
                        `),
                },
            },
        },
        brand: {
            control: 'object',
            description: 'Brand information including logo',
            table: {
                type: {
                    summary: deIndent(`
                            {
                                item: ReactNode,
                                href?: string,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        fixed: {
            control: 'radio',
            options: ['top', 'bottom'],
            description: 'Position of navbar',
            table: {
                type: {
                    summary: 'string',
                    detail: "top | bottom",
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for navbar',
            table: {
                type: {
                    summary: 'NavbarClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                brand?: string[],
                                burger?: string[],
                                menu?: string[],
                                menuStart?: string[],
                                menuEnd?: string[],
                                link?: string[],
                                item?: string[],
                                dropdown?: string[],
                                divider?: string[],
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
            description: 'Additional attributes for navbar',
            table: {
                type: {
                    summary: 'NavbarAttributes',
                    detail: deIndent(`
                            {
                                wrap?: HTMLAttributes<HTMLElement>,
                                brand?: HTMLAttributes<HTMLDivElement>,
                                burger?: AnchorHTMLAttributes<HTMLAnchorElement>,
                                menu?: HTMLAttributes<HTMLDivElement>,
                                menuStart?: HTMLAttributes<HTMLDivElement>,
                                menuEnd?: HTMLAttributes<HTMLDivElement>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for navbar. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'NavbarDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                brand?: Map<string, string>,
                                burger?: Map<string, string>,
                                menu?: Map<string, string>,
                                menuStart?: Map<string, string>,
                                menuEnd?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
    }
};
/**
 * Default navbar
 */
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
/**
 * Navbar with brand
 */
export const WithBrand = {
    ...Default,
    args: {
        brand: {
            item: <Fragment>Brand</Fragment>,
            href: './',
        },
    },
};
/**
 * Navbar that has children
 */
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
            ],
        },
    },
};
/**
 * Navbar that has grand children
 */
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
/**
 * Navbar placed fixed top
 */
export const FixedTop = {
    ...Default,
    args: {
        fixed: "top",
    },
};
/**
 * Navbar placed fixed bottom
 */
export const FixedBottom = {
    ...Default,
    args: {
        fixed: "bottom",
    },
};
/**
 * Navbar with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        brand: {
            item: <Fragment>Brand</Fragment>,
            href: './',
        },
        menus: {
            start: [
                {label: 'Menu 1', href: "#1", classes:['test-menu-1']},
                {label: 'Menu 2', href: "#2", classes:['test-menu-2']},
                {label: 'Menu 3', href: "#3", classes:['test-menu-3']},
                {
                    label: 'Menu 4',
                    href: "#4",
                    classes:['test-menu-4'],
                    children: [
                        {label: 'Menu 4-1', href: "#4-1", classes:['test-menu-4-1']},
                        {label: 'Menu 4-2', href: "#4-2", classes:['test-menu-4-2']},
                        {isDivider: true},
                        {label: 'Menu 4-3', href: "#4-3", classes:['test-menu-4-3']},
                    ],
                },
            ],
            end: [
                {label: 'Menu End 5', href: "#5", classes:['test-menu-5']},
                {label: 'Menu End 6', href: "#6", classes:['test-menu-6']},
            ],
        },
        classes: {
            wrap: ['test-wrap'],
            brand: ['test-brand'],
            burger: ['test-burger'],
            menu: ['test-menu'],
            menuStart: ['test-menu-start'],
            menuEnd: ['test-menu-end'],
            link: ['test-link'],
            item: ['test-item'],
            dropdown: ['test-dropdown'],
            divider: ['test-divider'],
        },
    },
};
/**
 * Navbar with additional attributes
 */
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
/**
 * Navbar with datasets
 */
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
