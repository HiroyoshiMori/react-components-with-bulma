import React, {Fragment} from "react";
import {Navbar} from "../../../../components/layout/navigation/navbar";

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
