import React from 'react';
import {
    COLOR_TYPES,
    SIZES,
    STATES,
    Textarea,
} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Textarea Element',
        docs: {
            description: {
                component: 'This component renders textarea element.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/form/textarea/',
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Element name',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        id: {
            control: 'text',
            description: 'Element ID',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
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
                    summary: 'string[]',
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
            description: 'Datasets for textarea. "data-" will be added at the beginning of attributes.',
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
 * Default textarea
 */
export const Default = {
    render: (args: any) => <Textarea
        name={'textarea'}
        {...args}
    >
        Textarea contents
    </Textarea>,
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
    render: (args: any) => <Textarea
        name={'textarea-with-placeholder'}
        {...args}
    ></Textarea>,
    args: {
        placeholder: 'Placeholder',
    },
};
/**
 * Textarea with maxLength/minLength
 */
export const MinMax = {
    ...Default,
    args: {
        minLength: 10,
        maxLength: 20,
    },
};
/**
 * Textarea with word wrap
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
 * Textarea with style classes
 */
export const Classes = {
    ...Default,
    args: {
        classes: ['test-class'],
    },
};
/**
 * Textarea with additional attributes
 */
export const Attributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Textarea Label'},
    },
};
/**
 * Textarea with datasets
 */
export const Datasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'textarea-id'], ['name', 'Textarea Name']
        ]),
    },
};
