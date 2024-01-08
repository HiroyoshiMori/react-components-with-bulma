import React from 'react';
import {deIndent} from '../../../utils';
import {COLOR_TYPES, FormTextarea, SIZES, STATES} from "../../../components";

export default {
    title: 'React Component/Form/Textarea',
    component: FormTextarea,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Form Textarea Element',
        docs: {
            description: {
                component: `This component renders textarea for form with wrap div.field.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/form/textarea/`,
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Field name',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        id: {
            control: 'text',
            description: 'Field ID',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'Random string ID will be generated when undefined',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Contents of textarea',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        cols: {
            control: 'number',
            description: 'The number of Columns of textarea',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary : 'undefined',
                },
            },
        },
        rows: {
            control: 'number',
            description: 'The number of rows of textarea',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder which is shown when empty',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        maxLength: {
            control: 'number',
            description: 'Maximum length of textarea',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        minLength: {
            control: 'number',
            description: 'Minimum length of textarea',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        wordWrap: {
            control: 'select',
            options: ['default', 'hard', 'soft', 'off'],
            mapping: {
                Default: '',
            },
            description: 'Wordwrap',
            table: {
                type: {
                    summary: 'hard|soft|off',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        required: {
            control: 'boolean',
            description: 'Set textarea required',
            table: {
                defaultValue: {
                    summary: 'undefined',
                }
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Set textarea disabled',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        readOnly: {
            control: 'boolean',
            description: 'Set textarea readonly',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colorType: {
            control: 'select',
            options: ['default'].concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color type of element',
            table: {
                type: {
                    summary: COLOR_TYPES.join('|'),
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
            description: 'Size of element',
            table: {
                type: {
                    summary: SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        state: {
            control: 'select',
            options: ['default'].concat(STATES),
            mapping: {
                Default: '',
            },
            description: 'States as pseudo-classes of textarea',
            table: {
                type: {
                    summary: STATES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
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
            description: 'Additional attributes',
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
            description: 'Datasets for text box. "data-" will be added at the beginning of attributes.',
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
/**
 * Default textarea
 */
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
/**
 * Textarea with cols/rows
 */
export const ColsRows = {
    ...Default,
    args: {
        cols: 80,
        rows: 10,
    },
};
/**
 * Textarea with placeholder
 */
export const Placeholder = {
    render: (args: any) => <FormTextarea
        name={'textarea-with-placeholder'}
        {...args}
    ></FormTextarea>,
    args: {
        placeholder: 'Placeholder',
    },
};
/**
 * Textarea with minLength/maxLength
 */
export const MinMax = {
    ...Default,
    args: {
        minLength: 10,
        maxLength: 20,
    },
};
/**
 * Textarea with Wordwrap
 */
export const WrapWrap = {
    ...Default,
    args: {
        wrap: 'hard',
    },
};
/**
 * Required textarea
 */
export const Required = {
    ...Default,
    args: {
        required: true,
    },
};
/**
 * Disabled textarea
 */
export const Disabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/**
 * Readonly textarea
 */
export const Readonly = {
    ...Default,
    args: {
        readOnly: true,
    },
};
/**
 * Textarea with color type
 */
export const WithColorType = {
    ...Default,
    args: {
        colorType: 'primary',
    },
};
/**
 * Textarea with size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'small',
    },
};
/**
 * Textarea with state
 */
export const WithState = {
    ...Default,
    args: {
        state: 'hoverable',
    },
};
/**
 * Textarea without default style classes
 */
export const NoWrapDefaultClasses = {
    ...Default,
    args: {
        noDivWrap: true,
    },
};
/**
 * Textarea with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: {
            wrap: ['test-wrap-class'],
            control: ['test-control-class'],
            textarea: ['test-textarea-class'],
        },
    },
};
/**
 * Textarea with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            wrap: {'aria-label': 'Textarea Wrap Label'},
            control: {'aria-label': 'Textarea Control Label'},
            textarea: {'aria-label': 'Textarea Label'},
        },
    },
};
/**
 * Textarea with datasets
 */
export const WithDatasets = {
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
