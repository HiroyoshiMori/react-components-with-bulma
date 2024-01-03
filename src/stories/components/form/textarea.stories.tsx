import React from 'react';
import {deIndent} from '../../../utils';
import {FormTextarea, TextareaAttributes, TextareaDatasets} from "../../../components";

export default {
    title: 'React Component/Form/Textarea',
    component: FormTextarea,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Form Textarea Element',
        docs: {
            description: {
                component: "This component shows textarea for form with wrap div.field.<br>In Bulma doc: https://bulma.io/documentation/form/textarea/",
            },
        },
    },
    argTypes: {
        classes: {
            control: 'object',
            description: 'Style Classes to apply',
            table: {
                type: {
                    summary: 'TextareaClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                control?: string[],
                                label?: string[],
                                textarea?: string[],
                            }
                        `)
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
                    summary: 'TextareaAttributes',
                    detail: deIndent(`
                            {
                                wrap?: HTMLAttributes<HTMLDivElement>,
                                control?: HTMLAttributes<HTMLDivElement>,
                                label?: LabelHTMLAttributes<HTMLLabelElement>,
                                textarea?: TextareaHTMLAttributes<HTMLTextAreaElement>,                           
                            }
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
                    summary: 'TextareaDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                control?: Map<string, string>,
                                label?: Map<string, string>,
                                textarea?: Map<string, string>,
                            }
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
    render: (args: any) => <FormTextarea
        name={'textarea'}
        label={{
            label: 'Textarea Label',
        }}
        {...args}
    >
        Textarea contents
    </FormTextarea>,
};
export const ColsRows = {
    ...Default,
    args: {
        cols: 80,
        rows: 10,
    },
};
export const Placeholder = {
    render: (args: any) => <FormTextarea
        name={'textarea-with-placeholder'}
        {...args}
    ></FormTextarea>,
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
export const NoWrap = {
    ...Default,
    args: {
        noDivWrap: true,
    },
};
export const Classes = {
    ...Default,
    args: {
        classes: {
            wrap: ['test-wrap-class'],
            control: ['test-control-class'],
            textarea: ['test-textarea-class'],
        },
    },
};
export const Attributes = {
    ...Default,
    args: {
        attributes: {
            wrap: {'aria-label': 'Textarea Wrap Label'},
            control: {'aria-label': 'Textarea Control Label'},
            textarea: {'aria-label': 'Textarea Label'},
        },
    },
};
export const Datasets = {
    ...Default,
    args: {
        datasets: {
            wrap: new Map([
                ['id', 'textarea-wrap-id'], ['name', 'Textarea Wrap Name']
            ]),
            control: new Map([
                ['id', 'textarea-control-id'], ['name', 'Textarea Control Name']
            ]),
            textarea: new Map([
                ['id', 'textarea-id'], ['name', 'Textarea Name']
            ]),
        },
    },
};
