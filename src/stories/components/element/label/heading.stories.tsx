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
                component: "This component put \"Heading\".",
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
                    summary: 'ReactNode',
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
        classes: {
            control: 'object',
            description: 'Style Classes to apply',
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
            description: 'attributes to add extra. ',
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
            description: 'datasets which start with data-.',
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
export const Default = {
    render: (args: any) => <Heading label="Label" {...args} />,
}

export const H1 = {
    ...Default,
    args: {
        size: 1,
        label: 'H1',
    },
};
export const H2 = {
    ...Default,
    args: {
        size: 2,
        label: 'H2',
    },
};
export const H3 = {
    ...Default,
    args: {
        size: 3,
        label: 'H3',
    },
};
export const H4 = {
    ...Default,
    args: {
        size: 4,
        label: 'H4',
    },
};
export const H5 = {
    ...Default,
    args: {
        size: 5,
        label: 'H5',
    },
};
export const H6 = {
    ...Default,
    args: {
        size: 6,
        label: 'H6',
    },
};
export const H3_Size0 = {
    ...Default,
    args: {
        size: 0,
        label: 'H3',
    },
};
export const H3_Size7 = {
    ...Default,
    args: {
        size: 7,
        label: 'H3',
    },
};
export const DefaultWithClasses = {
    ...Default,
    args: {
        classes: ['has-background-primary', 'p-1']
    },
};
export const WithSizeClasses = {
    ...Default,
    args: {
        size: 1,
        classes: ['is-6']
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Heading'},
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'heading'], ['name', 'Heading'],
        ]),
    },
};
