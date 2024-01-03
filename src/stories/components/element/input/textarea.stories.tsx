import React from 'react';
import {COLOR_TYPES, INPUT_TEXT_TYPES, SIZES, STATES, Textarea, TextBox} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Textarea Element',
        docs: {
            description: {
                component: "This component shows textarea for form.<br>In Bulma doc: https://bulma.io/documentation/form/textarea/",
            },
        },
    },
    argTypes: {
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
                    summary: 'TextareaHTMLAttributes<HTMLTextAreaElement>',
                    detail: deIndent(`
                            e.g.,
                            {'aria-label': 'LABEL'}
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
    render: (args: any) => <Textarea
        name={'textarea'}
        {...args}
    >
        Textarea contents
    </Textarea>,
};
export const ColsRows = {
    ...Default,
    args: {
        cols: 80,
        rows: 10,
    },
};
export const Placeholder = {
    render: (args: any) => <Textarea
        name={'textarea-with-placeholder'}
        {...args}
    ></Textarea>,
    args: {
        placeholder: 'Placeholder',
    },
};
export const MinMax = {
    ...Default,
    args: {
        minLength: 10,
        maxLength: 20,
    },
};
export const WrapHard = {
    ...Default,
    args: {
        wrap: 'hard',
    },
};
export const WrapSoft = {
    ...Default,
    args: {
        wrap: 'soft',
    },
};
export const WrapOff = {
    ...Default,
    args: {
        wrap: 'off',
    },
};
export const Required = {
    ...Default,
    args: {
        required: true,
    },
};
export const Disabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
export const Readonly = {
    ...Default,
    args: {
        readOnly: true,
    },
};
export const Classes = {
    ...Default,
    args: {
        classes: ['test-class'],
    },
};
export const Attributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Textarea Label'},
    },
};
export const Datasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'textarea-id'], ['name', 'Textarea Name']
        ]),
    },
};
