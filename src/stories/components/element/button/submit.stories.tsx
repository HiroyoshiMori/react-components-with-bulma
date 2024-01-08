import {action} from "@storybook/addon-actions";
import {Submit} from "../../../../components";
import {deIndent} from "../../../../utils";
// @ts-ignore
import sampleImage from '../../../assets/sample_image.jpg';

export default {
    title: 'React Component/Element/Submit',
    component: Submit,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Input[type=submit,button] Element',
        docs: {
            description: {
                component: "This component renders input[type=submit,button] element.",
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
        onClick: {
            action: 'function',
            description: 'Function called when clicked',
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLElement>) => void',
                },
            },
        },
        additionalProps: {
            control: 'object',
            description: 'Additional properties',
            table: {
                type: {
                    summary: 'SubmitButtonFields | SubmitImageFields',
                    detail: deIndent(`
                            {
                                type: 'submit' | 'button',
                                value?: string | number,
                                colorType?: ColorTypes,
                                colorLight?: boolean,
                                size?: SizeTypes,
                                noDefaultClasses?: boolean,
                            } as SubmitButtonFields | {
                                type: 'image',
                                src: string,
                                alt?: string,
                            } as SubmitImageFields
                        `),
                },
            },
        },
        prefix: {
            control: 'boolean',
            description: 'Disable button',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        disabled: {
            control: '',
            description: '',
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: '[]',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'InputHTMLAttributes<HTMLInputElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" will be added at the beginning of attributes.',
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
                    summary: 'new Map()',
                },
            },
        },
    },
};
const defaultSubmitArgs = {
    name: 'InputSubmit',
    onClick: action('onClick'),
    prefix: 'pre-',
    additionalProps: {
        type: 'submit',
        value: 'Submit Value',
    },
};
const defaultImageArgs = {
    name: 'InputImage',
    onClick: action('onClick'),
    prefix: 'pre-',
    additionalProps: {
        type: 'image',
        src: sampleImage,
        alt: 'Alternative Text'
    },
};
/**
 * Default submit button (input[type=submit])
 */
export const Default = {
    render: (args: any) => <Submit
        {...defaultSubmitArgs}
        {...args}
    />,
};
/**
 * Butt (input[type=button])
 */
export const InputButton = {
    ...Default,
    args: {
        additionalProps: {
            ...defaultSubmitArgs.additionalProps,
            type: 'button',
        },
    },
};
/**
 * Image button (input[type=image])<br />
 * With additional classes: image, is-128x128
 */
export const InputImage = {
    ...Default,
    args: {
        ...defaultImageArgs,
        classes: ['image', 'is-128x128'],
    },
};
/**
 * Submit button with color type
 */
export const ColorType = {
    ...Default,
    args: {
        additionalProps: {
            ...defaultSubmitArgs.additionalProps,
            colorType: 'primary',
        },
    },
};
/**
 * Submit button with element size
 */
export const ElementSize = {
    ...Default,
    args: {
        additionalProps: {
            ...defaultSubmitArgs.additionalProps,
            size: 'small',
        },
    },
};
/**
 * Submit button without default classes
 */
export const WithoutDefaultClasses = {
    ...Default,
    args: {
        additionalProps: {
            ...defaultSubmitArgs.additionalProps,
            noDefaultClasses: true,
        },
    },
};
/**
 * Disable button
 */
export const DisableButton = {
    ...Default,
    args: {
        disabled: true,
    },
};
/**
 * Button with classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: ['test-class'],
    },
};
/**
 * Button with attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Button Label'},
    },
};
/**
 * Button with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'button-id'], ['name', 'Button Name'],
        ]),
    },
};
