import React from "react";
import {Table} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Table set',
        docs: {
            description: {
                component: "This component shows tables.<br>In Bulma doc: https://bulma.io/documentation/elements/table/",
            },
        },
    },
    argTypes: {
        body: {
            control: 'object',
            description: 'Table body data',
            table: {
                type: {
                    summary: 'TableBodyProps',
                    detail: deIndent(`
                            {
                                values: {
                                    values: {
                                        value: ReactNode;
                                        colSpan?: number;
                                        rowSpan?: number;
                                        isHeaderCell?: boolean;
                                        attributes?: HTMLAttributes<HTMLTableDataCellElement | HTMLTableHeaderCellElement>;
                                        datasets?: Map<string, string>;
                                    } as TableCellProps[];
                                    attributes?: HTMLAttributes<HTMLTableRowElement>;
                                    datasets?: Map<string, string>;
                                } as TableRowProps[],
                                classes?: {
                                    wrap?: string[];
                                    row?: string[];
                                },
                                attributes?: HTMLAttributes<HTMLTableSectionElement>,
                                datasets?: Map<string, string>,
                            }
                        `),
                },
            },
        },
        headers: {
            control: 'object',
            description: 'Table header data',
            table: {
                type: {
                    summary: 'TableHeaderProps',
                    detail: deIndent(`
                            {
                                values: TableRowProps[];
                                classes?: {
                                    wrap?: string[],
                                    row?: string[],
                                };
                                attributes?: HTMLAttributes<HTMLTableSectionElement>;
                                datasets?: Map<string, string>;
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        footers: {
            control: 'object',
            description: 'Table footer data',
            table: {
                type: {
                    summary: 'TableFooterProps',
                    detail: deIndent(`
                            {
                                values: TableRowProps[];
                                classes?: {
                                    wrap?: string[],
                                    row?: string[],
                                };
                                attributes?: HTMLAttributes<HTMLTableSectionElement>;
                                datasets?: Map<string, string>;
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        caption: {
            control: 'object',
            description: 'Caption data',
            table: {
                type: {
                    summary: 'CaptionProps',
                    detail: deIndent(`
                            {
                                children?: ReactNode,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLTableCaptionElement>,
                                datasets?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colgroup: {
            control: 'object',
            description: 'Column group data',
            table: {
                type: {
                    summary: 'ColGroupProps',
                    detail: deIndent(`
                            {
                                {cols: ColProps[], span: undefined} | {cols: [], span: number},
                                classes?: {
                                    group?: string[],
                                    col?: string[],
                                };
                                attributes?: ColgroupHTMLAttributes<HTMLTableColElement>;
                                datasets?: Map<string, string>;
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isBordered: {
            control: 'boolean',
            description: 'Table is bordered',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        isStriped: {
            control: 'boolean',
            description: 'Has striped rows',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        isNarrow: {
            control: 'boolean',
            description: 'Narrower table',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        isHoverable: {
            control: 'boolean',
            description: 'Has striped rows when hovered',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        isFullWidth: {
            control: 'boolean',
            description: 'Full width table',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        inTableContainer: {
            control: 'boolean',
            description: 'Table will be in container <div>',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'TableClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                row?: string[],
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
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'TableAttributes',
                    detail: deIndent(`
                            {
                                wrap?: TableHTMLAttributes<HTMLTableElement>,
                                container?: HTMLAttributes<HTMLDivElement>,
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
                    summary: 'TableDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                container?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
    },
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
