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
        componentSubtitle: 'Dropdown menu',
        docs: {
            description: {
                component: "This component shows navigation menu for content.<br>In Bulma doc: https://bulma.io/documentation/components/dropdown/",
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
            description: 'Style classes',
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
            description: 'Additional attributes',
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
            description: 'Datasets',
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
export const Default = {
    render: (args: any) => <Dropdown
        menuId='dropdown-id'
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
