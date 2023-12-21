import React from 'react';
import {List} from "../../../../components";

export default {
    component: List,
    tags: ['autodocs'],
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
