import React, {Fragment} from "react";
import {HORIZONTAL_POSITIONS, Pagination, SIZES} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Pagination - Navigation',
        docs: {
            description: {
                component: 'This component renders pagination link.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/components/pagination/',
            },
        },
    },
    argTypes: {
        itemTotal: {
            control: 'number',
            description: 'Total page number to paginate',
        },
        current: {
            control: 'number',
            description: 'Current page number',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: '1',
                },
            },
        },
        labels: {
            control: 'object',
            description: 'Labels for each item',
            table: {
                type: {
                    summary: 'PaginationLabels',
                    detail: deIndent(`
                            {
                                previous?: ReactNode,
                                next?: ReactNode,
                                ellipsis?: ReactNode,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        link: {
            control: 'text',
            description: 'link format for sprintf. e.g., "./?p=%d"',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onClick: {
            action: 'function',
            description: 'Function called when clicked',
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLAnchorElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        styleRounded: {
            control: 'text',
            description: 'Style of pagination',
            table: {
                type: {
                    summary: '"rounded"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        position: {
            control: 'radio',
            options: ['default'].concat(HORIZONTAL_POSITIONS),
            mapping: {
                Default: '',
            },
            description: 'Where to put pagination',
            table: {
                type: {
                    summary: HORIZONTAL_POSITIONS,
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: 'select',
            options: ['default'].concat(SIZES),
            mapping: {
                Default: '',
            },
            description: 'Size of pagination',
            table: {
                type: {
                    summary: SIZES,
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for pagination',
            table: {
                type: {
                    summary: 'PaginationClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                previous?: string[],
                                next?: string[],
                                list?: string[],
                                link?: string[],
                                ellipsis?: string[],
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
            description: 'Additional attributes for pagination',
            table: {
                type: {
                    summary: 'PaginationAttributes',
                    detail: deIndent(`
                            {
                                wrap?: HTMLAttributes<HTMLAreaElement>,
                                list?: HTMLAttributes<HTMLUListElement>,
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
            description: 'Datasets for pagination. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'PaginationDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                list?: Map<string, string>,
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
 * Default pagination
 */
export const Default = {
    render: (args: any) => <Pagination
        itemTotal={1}
        current={1}
        link={'#link%d'}
        onClick={() => {}}
        {...args}
    />,
};
/**
 * Pagination with 2 pages
 */
export const TwoPage = {
    ...Default,
    args: {
        itemTotal: 2,
    },
};
/**
 * Pagination with 2/2
 */
export const TwoPageWithCurrent2 = {
    ...Default,
    args: {
        itemTotal: 2,
        current: 2,
    },
};
/**
 * Pagination with 3 pages
 */
export const ThreePage = {
    ...Default,
    args: {
        itemTotal: 3,
    },
};
/**
 * Pagination with 2/3
 */
export const ThreePageWithCurrent2 = {
    ...Default,
    args: {
        itemTotal: 3,
        current: 2,
    },
};
/**
 * Pagination with 3/3
 */
export const ThreePageWithCurrent3 = {
    ...Default,
    args: {
        itemTotal: 3,
        current: 3,
    },
};
/**
 * Pagination with 4 pages
 */
export const FourPage = {
    ...Default,
    args: {
        itemTotal: 4,
    },
};
/**
 * Pagination with 2/4
 */
export const FourPageWith2 = {
    ...Default,
    args: {
        itemTotal: 4,
        current: 2,
    },
};
/**
 * Pagination with 3/4
 */
export const FourPageWith3 = {
    ...Default,
    args: {
        itemTotal: 4,
        current: 3,
    },
};
/**
 * Pagination with 4/4
 */
export const FourPageWith4 = {
    ...Default,
    args: {
        itemTotal: 4,
        current: 4,
    },
};
/**
 * Pagination with 10 pages
 */
export const TenPage = {
    ...Default,
    args: {
        itemTotal: 10,
    },
};
/**
 * Pagination with 2/10
 */
export const TenPageWithCurrent2 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 2,
    },
};
/**
 * Pagination with 3/10
 */
export const TenPageWithCurrent3 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 3,
    },
};
/**
 * Pagination with 4/10
 */
export const TenPageWithCurrent4 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 4,
    },
};
/**
 * Pagination with 5/10
 */
export const TenPageWithCurrent5 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
    },
};
/**
 * Pagination with 7/10
 */
export const TenPageWithCurrent7 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 7,
    },
};
/**
 * Pagination with 8/10
 */
export const TenPageWithCurrent8 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 8,
    },
};
/**
 * Pagination with 9/10
 */
export const TenPageWithCurrent9 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 9,
    },
};
/**
 * Pagination with 10/10
 */
export const TenPageWithCurrent10 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 10,
    },
};
/**
 * Pagination positioned left
 */
export const PositionLeft = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        position: 'left',
    },
};
/**
 * Pagination positioned right
 */
export const PositionRight = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        position: 'right',
    },
};
/**
 * Paginatin with rounded shape
 */
export const WithRoundedShape = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        style: 'rounded',
    },
};
/**
 * Sized pagination
 */
export const ElementSize = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        size: 'small',
    },
};
/**
 * Pagination with labels
 */
export const Labels = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        labels: {
            previous: <Fragment>&#171;</Fragment>,
            next: <Fragment>&#187;</Fragment>,
            ellipsis: <Fragment>&sim;</Fragment>
        }
    },
};
/**
 * Pagination with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 4,
        classes: {
            wrap: ['test-wrap'],
            previous: ['test-prev'],
            next: ['test-next'],
            list: ['test-list'],
            link: ['test-link'],
            ellipsis: ['test-ellipsis'],
        },
    },
};
/**
 * Pagination with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            wrap: {
                'aria-label': 'Pagination Wrap',
            },
            list: {
                'aria-label': 'Pagination List',
            },
        },
    },
};
/**
 * Pagination with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            wrap: new Map([
                ['id', 'pagination-wrap'], ['name', 'Pagination wrap'],
            ]),
            list: new Map([
                ['id', 'pagination-list'], ['name', 'Pagination list'],
            ]),
        },
    },
};
