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
                component: 'This component renders tables.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/table/',
            },
        },
    },
    argTypes: {
        body: {
            control: 'object',
            description: 'Data of table which is shown in body',
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
                                        attributes?: HTMLAttributes<HTMLTableCellElement>;
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
            description: 'Items of table header',
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
            description: 'Items of table footer',
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
                                {
                                    cols: ({
                                        span?: number,
                                        classes?: string[],
                                        attributes?: ColHTMLAttributes<HTMLTableColElement>,
                                        datasets?: new Map<string, string>,
                                    } as ColProps)[],
                                    span: undefined,
                                } | {cols: [], span: number},
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
            description: 'Bordered table',
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
            description: 'Style classes for table',
            table: {
                type: {
                    summary: 'TableClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                container?: string[],
                                headers?: string[],
                                footers?: string[],
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
            description: 'Additional attributes for table',
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
            description: 'Datasets for table. "data-" will be added at the beginning of attributes.',
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
/**
 * Default table
 */
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
/**
 * Bordered table
 */
export const IsBordered = {
    ...Default,
    args: {
        isBordered: true,
    },
};
/**
 * Striped table
 */
export const IsStriped = {
    ...Default,
    args: {
        isStriped: true,
    },
};
/**
 * Narrow table
 */
export const IsNarrow = {
    ...Default,
    args: {
        isNarrow: true,
    },
};
/**
 * Table striped when hovered
 */
export const IsHovarable = {
    ...Default,
    args: {
        isHoverable: true,
    },
};
/**
 * Table with full width
 */
export const IsFullWidth = {
    ...Default,
    args: {
        isFullWidth: true,
    },
};
/**
 * Table rendered in container
 */
export const InTableContainer = {
    ...Default,
    args: {
        inTableContainer: true,
    },
};
/**
 * Table with header
 */
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
/**
 * Table with footer
 */
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
/**
 * Table with caption
 */
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
/**
 * Table with colgroup with no cols
 */
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
/**
 * Table with colgroup with cols
 */
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
/**
 * Table with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        inTableContainer: true,
        body: {
            values: [
                {
                    values: [
                        {value: "TEST 1", classes: ['test-value-1']},  // Do NOT use HTML tags in ReactNode in storybook, otherwise autodocs will be out of memory.
                        {value: "TEST 2", classes: ['test-value-2']},
                        {value: "TEST 3", classes: ['test-value-3']},
                        {value: "TEST 4", classes: ['test-value-4']},
                        {value: "TEST 5", classes: ['test-value-5']},
                    ],
                    classes: ['test-body-row-1'],
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                    classes: ['test-body-row-2'],
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                    classes: ['test-body-row-3'],
                },
            ],
            classes: {
                wrap: ['test-body-wrap'],
                row: ['test-body-row'],
            },
        },
        headers: {
            values: [
                {
                    values: [
                        {value: "Header 1", classes: ['test-header-1']},
                        {value: "Header 2", classes: ['test-header-2']},
                        {value: "Header 3", classes: ['test-header-3']},
                        {value: "Header 4", classes: ['test-header-4']},
                        {value: "Header 5", classes: ['test-header-5']},
                    ],
                    classes: ['test-header-row'],
                },
            ],
            classes: {
                wrap: ['test-header-wrap'],
                row: ['test-header-row'],
            },
        },
        footers: {
            values: [
                {
                    values: [
                        {value: "Footer 1", classes: ['test-footer-1']},
                        {value: "Footer 2", classes: ['test-footer-2']},
                        {value: "Footer 3", classes: ['test-footer-3']},
                        {value: "Footer 4", classes: ['test-footer-4']},
                        {value: "Footer 5", classes: ['test-footer-5']},
                    ],
                    classes: ['test-footer-row'],
                },
            ],
            classes: {
                wrap: ['test-footer-wrap'],
                row: ['test-footer-row'],
            },
        },
        classes: {
            wrap: ['test-wrap'],
            container: ['test-container'],
            headers: ['test-headers'],
            footers: ['test-footers'],
        },
    },
};
/**
 * Table with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        inTableContainer: true,
        body: {
            values: [
                {
                    values: [
                        {value: "TEST 1", attributes: {'aria-label': 'Table Value 1'}},  // Do NOT use HTML tags in ReactNode in storybook, otherwise autodocs will be out of memory.
                        {value: "TEST 2", attributes: {'aria-label': 'Table Value 2'}},
                        {value: "TEST 3", attributes: {'aria-label': 'Table Value 3'}},
                        {value: "TEST 4", attributes: {'aria-label': 'Table Value 4'}},
                        {value: "TEST 5", attributes: {'aria-label': 'Table Value 5'}},
                    ],
                    attributes: {'aria-label': 'Table Body Row 1'},
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                    attributes: {'aria-label': 'Table Body Row 2'},
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                    attributes: {'aria-label': 'Table Body Row 3'},
                },
            ],
            attributes: {'aria-label': 'Table Body'},
        },
        headers: {
            values: [
                {
                    values: [
                        {value: "Header 1", attributes: {'aria-label': 'Table Header 1'}},
                        {value: "Header 2", attributes: {'aria-label': 'Table Header 2'}},
                        {value: "Header 3", attributes: {'aria-label': 'Table Header 3'}},
                        {value: "Header 4", attributes: {'aria-label': 'Table Header 4'}},
                        {value: "Header 5", attributes: {'aria-label': 'Table Header 5'}},
                    ],
                    attributes: {'aria-label': 'Table Header Row'},
                },
            ],
            attributes: {'aria-label': 'Table Header'},
        },
        footers: {
            values: [
                {
                    values: [
                        {value: "Footer 1", attributes: {'aria-label': 'Table Footer 1'}},
                        {value: "Footer 2", attributes: {'aria-label': 'Table Footer 2'}},
                        {value: "Footer 3", attributes: {'aria-label': 'Table Footer 3'}},
                        {value: "Footer 4", attributes: {'aria-label': 'Table Footer 4'}},
                        {value: "Footer 5", attributes: {'aria-label': 'Table Footer 5'}},
                    ],
                    attributes: {'aria-label': 'Table Footer Row'},
                },
            ],
            attributes: {'aria-label': 'Table Footer'},
        },
        attributes: {
            wrap: {'aria-label': 'Table Wrap'},
            container: {'aria-label': 'Table Container'},
        },
    },
};
/**
 * Table with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        inTableContainer: true,
        body: {
            values: [
                {
                    values: [
                        {value: "TEST 1", datasets: new Map([['id', 'table-body-value-1']])},  // Do NOT use HTML tags in ReactNode in storybook, otherwise autodocs will be out of memory.
                        {value: "TEST 2", datasets: new Map([['id', 'table-body-value-2']])},
                        {value: "TEST 3", datasets: new Map([['id', 'table-body-value-3']])},
                        {value: "TEST 4", datasets: new Map([['id', 'table-body-value-4']])},
                        {value: "TEST 5", datasets: new Map([['id', 'table-body-value-5']])},
                    ],
                    datasets: new Map([['id', 'table-body-row-1']]),
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                    datasets: new Map([['id', 'table-body-row-2']]),
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                    datasets: new Map([['id', 'table-body-row-3']]),
                },
            ],
            datasets: new Map([['id', 'table-body']]),
        },
        headers: {
            values: [
                {
                    values: [
                        {value: "Header 1", datasets: new Map([['id', 'table-header-1']])},
                        {value: "Header 2", datasets: new Map([['id', 'table-header-2']])},
                        {value: "Header 3", datasets: new Map([['id', 'table-header-3']])},
                        {value: "Header 4", datasets: new Map([['id', 'table-header-4']])},
                        {value: "Header 5", datasets: new Map([['id', 'table-header-5']])},
                    ],
                    datasets: new Map([['id', 'table-header-row']]),
                },
            ],
            datasets: new Map([['id', 'table-header']]),
        },
        footers: {
            values: [
                {
                    values: [
                        {value: "Footer 1", datasets: new Map([['id', 'table-footer-1']])},
                        {value: "Footer 2", datasets: new Map([['id', 'table-footer-2']])},
                        {value: "Footer 3", datasets: new Map([['id', 'table-footer-3']])},
                        {value: "Footer 4", datasets: new Map([['id', 'table-footer-4']])},
                        {value: "Footer 5", datasets: new Map([['id', 'table-footer-5']])},
                    ],
                    datasets: new Map([['id', 'table-footer-row']]),
                },
            ],
            datasets: new Map([['id', 'table-footer']]),
        },
        datasets: {
            wrap: new Map([['id', 'table-wrap']]),
            container: new Map([['id', 'table-container']]),
        },
    },
};
