import React from "react";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Dropdown} from "../../../../components";
import {deIndent} from "../../../../utils";
import {action} from "@storybook/addon-actions";

export default {
    title: 'React Component/Layout/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Interactive Dropdown menu for discoverable content',
        docs: {
            description: {
                component: 'This component renders dropdown menu for content.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/components/dropdown/',
            },
        },
    },
    argTypes: {
        menuId: {
            control: 'text',
            description: 'Menu ID for dropdown menu',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'Random string ID will be generated if undefined'
                }
            },
        },
        trigger: {
            control: 'object',
            description: 'Trigger button property for dropdown',
            table: {
                type: {
                    summary: 'ButtonProps',
                    detail: 'See: React Component/Element/Button',
                },
            },
        },
        items: {
            control: 'object',
            description: 'Dropdown menu item',
            table: {
                type: {
                    summary: 'DropdownContentProps[]',
                    detail: deIndent(`
                            ({
                                tag: React.ElementType,
                                children?: HTMLCollection,
                                href?: string,
                                onClick?: (e: React.MouseEvent<HTMLElement>) => void,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>,
                                datasets?: Map<string, string>,
                            } as DropdownItemProps | {
                                isDivider: true,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLHeadingElement>,
                                datasets?: Map<string, string>,
                            } as DropdownDividerProps)[]
                        `),
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for dropdown',
            table: {
                type: {
                    summary: 'DropdownClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                trigger?: string[],
                                menu?: string[],
                                content?: string[],
                                item?: string[],
                                divider?: string[],
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                }
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for dropdown',
            table: {
                type: {
                    summary: 'DropdownAttributes',
                    detail: deIndent(`
                            {
                                wrap?: HTMLAttributes<HTMLDivElement>,
                                trigger?: HTMLAttributes<HTMLDivElement>,
                                menu?: HTMLAttributes<HTMLDivElement>,
                                content?: HTMLAttributes<HTMLDivElement>,
                                item?: HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>,
                                divider?: HTMLAttributes<HTMLDivElement>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                }
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for dropdown. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'DropdownDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                trigger?: Map<string, string>,
                                menu?: Map<string, string>,
                                content?: Map<string, string>,
                                item?: Map<string, string>,
                                divider?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                }
            },
        },
    },
};
/**
 * Default dropdown
 */
export const Default = {
    render: (args: any) => <Dropdown
        trigger={{
            label: 'Dropdown Button',
            awesomeIcon: {
                icon: icon({
                    name: 'angle-down',
                }),
            },
            iconPosition: 'right',
        }}
        items={[
            {
                tag: 'a',
                href: '#DropdownMenu',
                children: 'Dropdown Menu 1',
            },
            {
                tag: 'a',
                onClick: action('onClick'),
                children: 'Dropdown Menu 2',
            },
            {
                isDivider: true,
            },
            {
                tag: 'div',
                children: 'This is menu written in div element. no click available',
            },
        ]}
        classes={{
            wrap: ['is-hoverable'],
        }}
        {...args}
    />,
};
/**
 * Dropdown with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        items: [
            {
                tag: 'a',
                children: 'Tag A',
                classes: ['test-tag-a'],
            },
            {
                tag: 'a',
                children: 'Tag B',
                classes: ['test-tag-b'],
            },
            {
                isDivider: true,
                classes: ['test-divider-a'],
            },
            {
                tag: 'a',
                children: 'Tag C',
                classes: ['test-tag-c'],
            },
            {
                isDivider: true,
                classes: ['test-divider-b'],
            },
            {
                tag: 'a',
                children: 'Tag D',
                classes: ['test-tag-d'],
            },
        ],
        classes: {
            wrap: ['is-hoverable', 'test-wrap'],
            trigger: ['test-trigger'],
            menu: ['test-menu'],
            content: ['test-content'],
            item: ['test-item'],
            divider: ['test-divider'],
        }
    },
};
/**
 * Dropdown with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        items: [
            {
                tag: 'a',
                children: 'Tag A',
                attributes: {'aria-label': 'Tag A'},
            },
            {
                tag: 'a',
                children: 'Tag B',
                attributes: {'aria-label': 'Tag B'},
            },
            {
                isDivider: true,
                attributes: {'aria-label': 'Divider A'},
            },
            {
                tag: 'a',
                children: 'Tag C',
                attributes: {'aria-label': 'Tag C'},
            },
            {
                isDivider: true,
                attributes: {'aria-label': 'Divider B'},
            },
            {
                tag: 'a',
                children: 'Tag D',
                attributes: {'aria-label': 'Tag D'},
            },
        ],
        attributes: {
            wrap: {'aria-label': 'Wrap'},
            trigger: {'aria-label': 'Trigger'},
            menu: {'aria-label': 'Menu'},
            content: {'aria-label': 'Content'},
            item: {'aria-label2': 'Item'},
            divider: {'aria-label2': 'Divider'},
        }
    },
};
/**
 * Dropdown with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        items: [
            {
                tag: 'a',
                children: 'Tag A',
                datasets: new Map([
                    ['name', 'Tag A'],
                ]),
            },
            {
                tag: 'a',
                children: 'Tag B',
                datasets: new Map([
                    ['name', 'Tag B'],
                ]),
            },
            {
                isDivider: true,
                datasets: new Map([
                    ['name', 'Divider A'],
                ]),
            },
            {
                tag: 'a',
                children: 'Tag C',
                datasets: new Map([
                    ['name', 'Tag C'],
                ]),
            },
            {
                isDivider: true,
                datasets: new Map([
                    ['name', 'Divider B'],
                ]),
            },
            {
                tag: 'a',
                children: 'Tag D',
                datasets: new Map([
                    ['name', 'Tag D'],
                ]),
            },
        ],
        datasets: {
            wrap: new Map([
                ['name2', 'Wrap'],
            ]),
            trigger: new Map([
                ['name2', 'Trigger'],
            ]),
            menu: new Map([
                ['name2', 'Menu'],
            ]),
            content: new Map([
                ['name2', 'Content'],
            ]),
            item: new Map([
                ['name2', 'Item'],
            ]),
            divider: new Map([
                ['name2', 'Divider'],
            ]),
        }
    },
};
