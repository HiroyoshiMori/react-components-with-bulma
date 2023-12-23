import React from "react";
import {Table} from "../../../../components";

export default {
    component: Table,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Table
        body={{
            values: [
                {
                    values: [
                        {value: "TEST 1"},  // Do NOT use HTML tags in ReactNode in storybook, otherwise autodocs will be out of memory.
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                },
            ],
        }}
        {...args}
    />,
};
export const IsBordered = {
    ...Default,
    args: {
        isBordered: true,
    },
};
export const IsStriped = {
    ...Default,
    args: {
        isStriped: true,
    },
};
export const IsNarrow = {
    ...Default,
    args: {
        isNarrow: true,
    },
};
export const IsHovarable = {
    ...Default,
    args: {
        isHoverable: true,
    },
};
export const IsFullWidth = {
    ...Default,
    args: {
        isFullWidth: true,
    },
};
export const InTableContainer = {
    ...Default,
    args: {
        inTableContainer: true,
    },
};
export const HasHeader = {
    ...Default,
    args: {
        headers: {
            values: [
                {
                    values: [
                        {
                            value: "Header 1",
                            classes: ['thead', 'has-background-warning-light'],
                            attributes: {'aria-label': 'thead'},
                            datasets: new Map([
                                ['id', 'thead'], ['name', 'Table header']
                            ]),
                        },
                        {value: "Header 2"},
                        {value: "Header 3"},
                        {value: "Header 4"},
                        {value: "Header 5"},
                    ],
                },
            ],
        },
    },
};
export const HasFooter = {
    ...Default,
    args: {
        footers: {
            values: [
                {
                    values: [
                        {
                            value: "Footer 1",
                            classes: ['tfoot', 'has-background-info-light'],
                            attributes: {'aria-label': 'tfoot'},
                            datasets: new Map([
                                ['id', 'tfoot'], ['name', 'Table footer']
                            ]),
                        },
                        {value: "Footer 2"},
                        {value: "Footer 3"},
                        {value: "Footer 4"},
                        {value: "Footer 5"},
                    ],
                },
            ],
        },
    },
};
export const HasCaption = {
    ...Default,
    args: {
        caption: {
            classes: ['caption', 'has-background-success-light'],
            attributes: {'aria-label': 'Table Caption'},
            datasets: new Map([
                ['id', 'caption'], ['name', 'Table Caption']
            ]),
            children: "Test Caption"
        }
    },
};
export const HasColGroupWithNoCols = {
    ...Default,
    args: {
        colgroup: {
            span: 5,
            classes: {
                group: ['colgroup', 'has-background-primary-light'],
                col: [],
            },
            attributes: {'aria-label': 'Col Group'},
            datasets: new Map([
                ['id', 'colgroup'], ['name', 'Table Col Group']
            ]),
        },
    },
};
export const HasColGroupWithCols = {
    ...Default,
    args: {
        colgroup: {
            cols: [
                {
                    span: 1,
                    classes: ['col', 'has-background-link-light'],
                    attributes: {'aria-label': 'col 1'},
                    datasets: new Map([
                        ['id', 'col1'], ['name', 'Col 1']
                    ]),
                },
                {
                    span: 2,
                    classes: ['col', 'has-background-primary'],
                    attributes: {'aria-label': 'col 2'},
                    datasets: new Map([
                        ['id', 'col2'], ['name', 'Col 2']
                    ]),
                },
                {
                    span: 1,
                    classes: ['col'],
                    attributes: {'aria-label': 'col 3'},
                    datasets: new Map([
                        ['id', 'col3'], ['name', 'Col 3']
                    ]),
                },
                {
                    span: 1,
                    classes: ['col'],
                    attributes: {'aria-label': 'col 4'},
                    datasets: new Map([
                        ['id', 'col4'], ['name', 'Col 4']
                    ]),
                },
            ],
        },
    },
};
