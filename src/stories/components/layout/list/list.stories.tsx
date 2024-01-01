import React from 'react';
import {List} from '../../../../components';
import {deIndent} from '../../../../utils';
import {ListDetailCustom} from "../../../../components/layout/list/custom/detail_custom";
import {ListHeaderCustomWith5Items} from "../../../../components/layout/list/custom/header_custom";

export default {
    title: 'React Component/Layout/List',
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'List of items',
        docs: {
            description: {
                component: "This component shows list of items using Flexbox.<br>In Bulma doc: https://bulma.io/documentation/columns/basics/",
            },
        },
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Items in list',
            table: {
                type: {
                    summary: 'ListItemProps',
                    detail: deIndent(`
                            {
                                data?: {
                                    column?: {
                                        value: any,
                                        attributes?: HTMLAttributes<HTMLDivElement>,
                                        datasets?: Map<string, string>,
                                    }[],
                                    attributes?: HTMLAttributes<HTMLDivElement>,
                                    datasets?: Map<string, string>,
                                }[],
                                type?: string,
                            }
                        `),
                },
            },
        },
        headers: {
            control: 'object',
            description: 'Header of list',
            table: {
                type: {
                    summary: 'ListColumnFields[]',
                    detail: deIndent(`
                            {
                                column?: {
                                    value: any,
                                    attributes?: HTMLAttributes<HTMLDivElement>,
                                    datasets?: Map<string, string>,
                                }
                            }[]
                        `),
                },
                defaultValue: {
                    summary: '[]',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'ListClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                headers?: {
                                    wrap?: string[],
                                    column?: string[],
                                },
                                detail?: {
                                    wrap?: string[],
                                    column?: string[],
                                },
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
                    summary: 'ListAttributes',
                    detail: deIndent(`
                            {
                                wrap?: HTMLAttributes<HTMLDivElement>,
                                headers?: HTMLAttributes<HTMLDivElement>,
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
            description: 'Datasets',
            table: {
                type: {
                    summary: 'ListDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                headers?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'new Map()',
                },
            },
        },
    },
};
export const Default = {
    render: (args: any) => <List
        items={{
            data: [
                {
                    columns: [
                        {value: "Column A"},
                        {value: "Column B"},
                        {value: "Column C"},
                        {value: "Column D"},
                        {value: "Column E"},
                        {value: "Column F"},
                    ],
                },
                {
                    columns: [
                        {value: "Column 2A"},
                        {value: "Column 2B"},
                        {value: "Column 2C"},
                        {value: "Column 2D"},
                        {value: "Column 2E"},
                        {value: "Column 2F"},
                    ],
                },
            ],
            type: 'default',
        }}
        headers={[
            {value: 'Header A'},
            {value: 'Header B'},
            {value: 'Header C'},
            {value: 'Header D'},
            {value: 'Header E'},
            {value: 'Header F'},
        ]}
        {...args}
    />,
};
export const InConsistent = {
    ...Default,
    args: {
        items: {
            data: [
                {
                    columns: [
                        {value: "Column A"},
                        {value: "Column B"},
                        {value: "Column C"},
                        {value: "Column D"},
                        {value: "Column E"},
                        {value: "Column F"},
                        {value: "Column G"},
                    ],
                },
                {
                    columns: [
                        {value: "Column 2A"},
                        {value: "Column 2B"},
                        {value: "Column 2C"},
                        {value: "Column 2D"},
                        {value: "Column 2E"},
                    ],
                },
            ],
        },
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        headers: [
            {value: 'Header A', attributes: {'aria-label': 'List Header'}},
            {value: 'Header B', attributes: {'aria-label': 'List Header'}},
            {value: 'Header C', attributes: {'aria-label': 'List Header'}},
            {value: 'Header D', attributes: {'aria-label': 'List Header'}},
            {value: 'Header E', attributes: {'aria-label': 'List Header'}},
            {value: 'Header F', attributes: {'aria-label': 'List Header'}},
        ],
        items: {
            data: [
                {
                    columns: [
                        {value: "Column A", attributes: {'aria-label': 'List Column'}},
                        {value: "Column B", attributes: {'aria-label': 'List Column'}},
                        {value: "Column C", attributes: {'aria-label': 'List Column'}},
                        {value: "Column D", attributes: {'aria-label': 'List Column'}},
                        {value: "Column E", attributes: {'aria-label': 'List Column'}},
                        {value: "Column F", attributes: {'aria-label': 'List Column'}},
                    ],
                    attributes: {
                        'aria-label': 'List Columns',
                    }
                },
            ],
        },
        attributes: {
            wrap: {'aria-label': 'List'},
            header: {'aria-label': 'List Headers'},
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        headers: [
            {
                value: 'Header A',
                datasets: new Map([
                    ['id', 'header'], ['name', 'header A'],
                ])
            },
            {
                value: 'Header B',
                datasets: new Map([
                    ['id', 'header'], ['name', 'header B'],
                ]),
            },
            {
                value: 'Header C',
                datasets: new Map([
                    ['id', 'header'], ['name', 'header C'],
                ]),
            },
        ],
        items: {
            data: [
                {
                    columns: [
                        {
                            value: "Column A",
                            datasets: new Map([
                                ['id', 'column'], ['name', 'column A'],
                            ]),
                        },
                        {
                            value: "Column B",
                            datasets: new Map([
                                ['id', 'column'], ['name', 'column B'],
                            ]),
                        },
                        {
                            value: "Column C",
                            datasets: new Map([
                                ['id', 'column'], ['name', 'column C'],
                            ]),
                        },
                    ],
                    datasets: new Map([
                        ['id', 'list-column'], ['name', 'List column'],
                    ])
                },
            ],
        },
        datasets: {
            wrap: new Map([
                ['id', 'wrap'], ['name', 'list-wrap'],
            ]),
            header: new Map([
                ['id', 'header'], ['name', 'list-header'],
            ]),
        },
    },
};
export const UsingCustom = {
    ...Default,
    args: {
        headers: [
            {value: 'Header A', classes: ['is-1']},
            {value: 'Header B', classes: ['is-4']},
            {value: 'Header C', classes: ['is-8']},
            {value: 'Header D', classes: ['is-4']},
            {value: 'Header E', classes: ['is-8']},
        ],
        items: {
            data: [
                {
                    columns: [
                        {value: "Column A", classes: ['is-1']},
                        {value: "Column B", classes: ['is-4']},
                        {value: "Column C", classes: ['is-8']},
                        {value: "Column D", classes: ['is-4']},
                        {value: "Column E", classes: ['is-8']},
                    ],
                },
                {
                    columns: [
                        {value: "Column 2A", classes: ['is-1']},
                        {value: "Column 2B", classes: ['is-4']},
                        {value: "Column 2C", classes: ['is-8']},
                        {value: "Column 2D", classes: ['is-4']},
                        {value: "Column 2E", classes: ['is-8']},
                    ],
                },
            ],
        },
        itemElement: ListDetailCustom,
        headerElement: ListHeaderCustomWith5Items,
    },
};
