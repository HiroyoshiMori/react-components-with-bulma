import React from 'react';
import { Heading } from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Heading',
    component: Heading,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Heading Element',
        docs: {
            description: {
                component: "This component renders Heading such as h1, h2 and etc.",
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label string. ignored when children specified',
            if: {arg: 'children', exists: false},
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Child element. is optional when label is specified',
            if: {arg: 'label', exists: false},
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: {type: 'range', min: 1, max: 6, step: 1},
            description: 'Heading level',
            table: {
                type: {
                    summary: 'number',
                    min: 1,
                    max: 6,
                    step: 1,
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hasSpaced: {
            control: 'boolean',
            description: 'Has space between title and subtitle if subtitle exists',
            if: {arg: 'subHeading', exists: true},
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        subHeading: {
            control: 'object',
            description: 'Subtitle data',
            table: {
                type: {
                    summary: 'HeadingProps',
                    detail: deIndent(`
                            {
                                label: string,
                                children: string,
                                size?: number,
                                classes: string[],
                                attributes: LabelHTMLAttributes<HTMLLabelElement>,
                                datasets: Map<string, string,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                }
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for heading',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: "[]",
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for heading',
            table: {
                type: {
                    summary: 'LabelHTMLAttributes<HTMLLabelElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for heading. "data-" will be added at the beginning of attributes.',
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
                    summary: "new Map()",
                },
            },
        },
    },
};
/**
 * Default heading
 */
export const Default = {
    render: (args: any) => <Heading label="Label" {...args} />,
}
/**
 * H1
 */
export const H1 = {
    ...Default,
    args: {
        size: 1,
        label: 'H1',
    },
};
/**
 * H2
 */
export const H2 = {
    ...Default,
    args: {
        size: 2,
        label: 'H2',
    },
};
/**
 * H3
 */
export const H3 = {
    ...Default,
    args: {
        size: 3,
        label: 'H3',
    },
};
/**
 * H4
 */
export const H4 = {
    ...Default,
    args: {
        size: 4,
        label: 'H4',
    },
};
/**
 * H5
 */
export const H5 = {
    ...Default,
    args: {
        size: 5,
        label: 'H5',
    },
};
/**
 * H6
 */
export const H6 = {
    ...Default,
    args: {
        size: 6,
        label: 'H6',
    },
};
/**
 * Heading with size not capable
 */
export const H3_Size0 = {
    ...Default,
    args: {
        size: 0,
        label: 'H3',
    },
};
/**
 * Heading with size not capable (2)
 */
export const H3_Size7 = {
    ...Default,
    args: {
        size: 7,
        label: 'H3',
    },
};
/**
 * Heading with in-consistent size
 */
export const H3_WithClassIs1 = {
    ...Default,
    args: {
        size: 3,
        label: 'H3',
        classes: ['is-1'],
    },
};
/**
 * Heading with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: ['has-background-primary', 'p-1']
    },
};
/**
 * Size with in-consistent style classes
 */
export const WithSizeClasses = {
    ...Default,
    args: {
        size: 1,
        classes: ['is-6']
    },
};
/**
 * Heading with subtitle
 */
export const WithSubTitle = {
    ...Default,
    args: {
        subHeading: {
            label: 'Subtitle',
        },
    },
};
/**
 * Heading with subtitle with spaced
 */
export const WithSubTitleWithSpaced = {
    ...Default,
    args: {
        hasSpaced: true,
        subHeading: {
            label: 'Subtitle',
        },
    },
};
/**
 * Heading using paragraph with size
 */
export const ParagraphWithSize = {
    ...Default,
    args: {
        useParagraph: true,
        size: 1,
    },
};
/**
 * Heading with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Heading'},
    },
};
/**
 * Heading with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'heading'], ['name', 'Heading'],
        ]),
    },
};
