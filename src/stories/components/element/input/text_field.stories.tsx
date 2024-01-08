import React from 'react';
import {
    COLOR_TYPES,
    INPUT_TEXT_TYPES,
    SIZES,
    STATES,
    TextField,
} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/TextField',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Text Field Element',
        docs: {
            description: {
                component: 'This component renders text field.<br>'
                        + 'In Bulma doc: https://bulma.io/documentation/form/input/',
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
        type: {
            control: 'select',
            options: INPUT_TEXT_TYPES,
            description: 'Field type of control to render',
            table: {
                type: {
                    summary: INPUT_TEXT_TYPES.join('|'),
                },
                defaultValue: {
                    summary: 'text',
                },
            },
        },
        value: {
            control: 'text',
            description: 'Value for text field',
            table: {
                type: {
                    summary: 'boolean | string | number',
                },
            },
        },
        onChange: {
            action: 'function',
            description: 'Function called when value is changed',
            table: {
                type: {
                    summary: '(e: ChangeEvent<HTMLInputElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                }
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder which is shown when value is empty',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colorType: {
            control: 'select',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color of text field',
            table: {
                type: {
                    summary: COLOR_TYPES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        state: {
            control: 'select',
            options: (['default']).concat(STATES),
            mapping: {
                Default: '',
            },
            description: 'States as pseudo-classes of text field',
            table: {
                type: {
                    summary: STATES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: 'select',
            options: (['default']).concat(SIZES),
            mapping: {
                Default: '',
            },
            description: 'Size of text field',
            table: {
                type: {
                    summary: SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for text field',
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
            description: 'Additional attributes for text field',
            table: {
                type: {
                    summary: 'InputHTMLAttributes<HTMLInputElement>',
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
            description: 'Datasets for text field. "data-" will be added at the beginning of attributes.',
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
 * Default text box
 */
export const Default = {
    render: (args: any) => <TextField
        name="text"
        value="Text"
        {...args}
    />,
};
/**
 * Text box with placeholder.
 */
export const PlaceHolder = {
    ...Default,
    args: {
        value: '',
        placeholder: 'Place Holder',
    }
};
/**
 * Text box with color type
 */
export const WithColorType = {
    ...Default,
    args: {
        colorType: 'primary',
    }
};
/**
 * Text box with state
 */
export const WithState = {
    ...Default,
    args: {
        state: 'hover',
    }
};
/**
 * Text box with element size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'small',
    }
};
/**
 * Text box with type=password
 */
export const Password = {
    ...Default,
    args: {
        fieldType: 'password',
    },
};
/**
 * Text box with type=email
 */
export const Email = {
    ...Default,
    args: {
        fieldType: 'email',
    },
};
/**
 * Text box with type=tel
 */
export const Tel = {
    ...Default,
    args: {
        fieldType: 'tel',
    },
};
/**
 * Text box with type=number
 */
export const Number = {
    ...Default,
    args: {
        fieldType: 'number',
    },
};
/**
 * Text box with type=search
 */
export const Search = {
    ...Default,
    args: {
        fieldType: 'search',
    },
};
/**
 * Text box with type=url
 */
export const Url = {
    ...Default,
    args: {
        fieldType: 'url',
    },
};
/**
 * Default text box with style classes
 */
export const DefaultWithClasses = {
    ...Default,
    args: {
        classes: ['has-background-primary', 'p-1']
    }
};
/**
 * Text box with color type and style classes
 */
export const ColorTypeWithClasses = {
    ...WithColorType,
    args: {
        value: 'Color will be Info',
        colorType: 'primary',
        classes: ['is-info']
    },
};
/**
 * Text box with additional attributes
 */
export const WithAttribute = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Text Box',
        },
    },
};
/**
 * Text box with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'text-box-with-id'], ['name', 'Text Box']
        ]),
    },
};
