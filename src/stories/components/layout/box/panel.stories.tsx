import React from "react";
import {action} from "@storybook/addon-actions";
import {Panel} from "../../../../components";
import {deIndent} from "../../../../utils";
import {withActions} from "@storybook/addon-actions/decorator";

export default {
    title: 'React Component/Layout/Panel',
    component: Panel,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Composable Panel',
        docs: {
            description: {
                component: "This component shows a composable panel.<br>In Bulma doc: https://bulma.io/documentation/components/panel/",
            },
        },
        actions: {
            handles: ['onClick', '.panel-block'],
        },
        decorators: [withActions],
    },
    argTypes: {
        header: {
            control: 'object',
            description: 'Panel header',
            table: {
                type: {
                    summary: 'PanelHeaderProps',
                    detail: deIndent(`
                            {
                                children?: ReactNode,
                                tag?: React.ElementType,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLElement>,
                                datasets?: Map<string, string>,
                            }
                        `),
                },
            },
        },
        items: {
            control: 'object',
            description: 'Panel body items',
            table: {
                type: {
                    summary: '(PanelTabsProps | PanelBlockProps)[]',
                    detail: deIndent(`
                            ({
                                children?: ReactNode,
                                isActive?: boolean,
                                tag?: React.ElementType,
                                href?: string,
                                onClick?: (e: React.MouseEvent) => void,
                                classes: string[],
                                attributes?: HTMLAttributes<HTMLElement>,
                                datasets?: Map<string, string>,
                            } as PanelBlockProps | {
                                items: ({
                                    href?: string,
                                    onClick?: (e: React.MouseEvent) => void,
                                    children?: ReactNode,
                                    classes: string[],
                                    attributes?: HTMLAttributes<HTMLElement>,
                                    datasets?: Map<string, string>,
                                } as PanelTabProps)[],
                                tag?: React.ElementType,
                                classes: string[],
                                attributes?: HTMLAttributes<HTMLDivElement>,
                                datasets?: Map<string, string>,
                            } as PanelTabsProps)[]
                        `),
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: '[]',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
            description: 'Datasets',
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
export const Default = {
    render: (args: any) => <Panel
        header={{
            children: 'Panel Header',
        }}
        items={[
            {
                items: [
                    { href: '#1', children: 'Panel Tab 1'},
                    { href: '#2', children: 'Panel Tab 2'},
                    { href: '#3', children: 'Panel Tab 3'},
                ],
            },
            { children: 'Panel Block 1' },
            { children: 'Panel Block 2', tag: 'p', isActive: true, },
            { children: 'Panel Block 3', tag: 'a', href: '#Block3' },
            { children: 'Panel Block 4', onClick: (e: React.MouseEvent<HTMLElement>)=> {console.debug(e);} },
        ]}
        {...args}
    />,
};
export const WithClasses = {
    ...Default,
    args: {
        header:{
            children: 'Panel Header',
            classes: ['test-panel-header'],
        },
        items: [
            {
                items: [
                    { href: '#1', children: 'Panel Tab 1', classes: ['text-panel-tab'] },
                    { href: '#2', children: 'Panel Tab 2' },
                    { href: '#3', children: 'Panel Tab 3' },
                ],
                classes: ['test-panel-tabs'],
            },
            { children: 'Panel Block 1', classes: ['test-panel-block'] },
            { children: 'Panel Block 2', tag: 'p' },
            { children: 'Panel Block 3', tag: 'a', href: '#Block3', isActive: true },
            { children: 'Panel Block 4', onClick: (e: React.MouseEvent)=> {console.debug(e);} },
        ],
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        header:{
            children: 'Panel Header',
            attributes: {'aria-label': 'Panel Header'},
        },
        items: [
            {
                items: [
                    { href: '#1', children: 'Panel Tab 1', attributes: {'aria-label': 'Panel Tab'} },
                    { href: '#2', children: 'Panel Tab 2' },
                    { href: '#3', children: 'Panel Tab 3' },
                ],
                attributes: {'aria-label': 'Panel Tabs'},
            },
            { children: 'Panel Block 1', attributes: {'aria-label': 'Panel Block'} },
            { children: 'Panel Block 2', tag: 'p' },
            { children: 'Panel Block 3', tag: 'a', href: '#Block3', isActive: true },
            { children: 'Panel Block 4', onClick: (e: React.MouseEvent)=> {console.debug(e);} },
        ],
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        header:{
            children: 'Panel Header',
            datasets: new Map([
                ['id', 'panel-header'], ['name', 'Panel Header'],
            ]),
        },
        items: [
            {
                items: [
                    { href: '#1', children: 'Panel Tab 1', datasets: new Map([
                            ['id', 'panel-tab'], ['name', 'Panel Tab'],
                        ]),
                    },
                    { href: '#2', children: 'Panel Tab 2' },
                    { href: '#3', children: 'Panel Tab 3' },
                ],
                datasets: new Map([
                    ['id', 'panel-tabs'], ['name', 'Panel Tabs'],
                ]),
            },
            { children: 'Panel Block 1', datasets: new Map([
                    ['id', 'panel-block'], ['name', 'Panel block'],
                ]),
            },
            { children: 'Panel Block 2', tag: 'p' },
            { children: 'Panel Block 3', tag: 'a', href: '#Block3', isActive: true },
            { children: 'Panel Block 4', onClick: (e: React.MouseEvent)=> {console.debug(e);} },
        ],
    },
};
