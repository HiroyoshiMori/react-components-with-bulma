import React from 'react';
import {Radio} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Radio button Element',
        docs: {
            description: {
                component: 'This component renders radio button.<br />'
                    + 'In Bulma doc: https://bulma.io/documentation/form/radio/',
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
            description: 'Element ID. It will be used when value or label is undefined.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, random string will be generated.'
                }
            },
        },
        value: {
            control: 'text',
            description: 'Value for radio. When undefined, ID will be used instead.',
            table: {
                type: {
                    summary: 'boolean | string | number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        label: {
            control: 'text',
            description: 'Label for radio. When undefined, value will be used instead.',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable radio',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        currentValue: {
            control: 'text',
            description: 'Current value for radio group',
            table: {
                type: {
                    summary: 'boolean | string | number',
                },
            },
        },
        onChange: {
            action: 'function',
            description: 'Function called when radio value changed',
            table: {
                type: {
                    summary: '(e: ChangeEvent<HTMLInputElement>) => void',
                },
            },
        },
        prefix: {
            control: 'text',
            description: 'Prefix for field name of radio',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for radio',
            table: {
                type: {
                    summary: 'RadioClasses',
                    detail: deIndent(`
                            {
                                label?: string[],
                                input?: string[],
                            }
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for radio',
            table: {
                type: {
                    summary: 'RadioAttributes',
                    detail: deIndent(`
                            {
                                label?: HTMLAttributes<HTMLLabelElement>,
                                input?: InputHTMLAttributes<HTMLInputElement>,
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
            description: 'Dataset for radio. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'RadioDatasets',
                    detail: deIndent(`
                            {
                                label?: Map<string, string>,
                                input?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
    }
};
/**
 * Default radio
 */
export const Default = {
    render: (args: any) => <Radio
        name={'radio'}
        id={'id'}
        value={'radio value'}
        label={'Radio'}
        currentValue="curValue"
        onChange={() => {return;}}
        {...args}
    />,
};
/**
 * Checked radio
 */
export const Checked = {
    ...Default,
    args: {
        label: 'Checked Radio',
        value: "same value",
        currentValue: "same value",
    },
};
/**
 * Radio disabled
 */
export const Disabled = {
    ...Default,
    args: {
        label: 'Disabled Radio',
        disabled: true,
    },
};
/**
 * Radio without ID.<br />
 * Random ID will be generated.
 */
export const NoId = {
    ...Default,
    args: {
        id: undefined,
    },
};
/**
 * Radio without value.<br />
 * ID will be used as value.
 */
export const WithoutValue = {
    ...Default,
    args: {
        value: undefined,
    },
};
/**
 * Radio without label.<br />
 * Value will be used as label.
 */
export const WithoutLabel = {
    ...Default,
    args: {
        label: undefined,
    },
};
/**
 * Radio without label and value.<br />
 * ID will be used as value and label.
 */
export const WithoutValueLabel = {
    ...Default,
    args: {
        value: undefined,
        label: undefined,
    },
};
/**
 * With style classes.<br />
 * With margin 5.
 */
export const M5 = {
    ...Default,
    args: {
        classes: {
            input: ['m-5'],
        },
    },
};
/**
 * With style classes.<br />
 * With margin-left 5.
 */
export const ML5 = {
    ...Default,
    args: {
        classes: {
            input: ['ml-5'],
        },
    },
};
/**
 * With style classes.<br />
 * With margin-right 5.
 */
export const MR5 = {
    ...Default,
    args: {
        classes: {
            input: ['mr-5'],
        },
    },
};
/**
 * Radio with additional attributes
 */
export const WithAttribute = {
    ...Default,
    args: {
        attributes: {
            label: {
                "aria-label": "Radio Label",
            },
            input: {
                "aria-label": "Radio Input",
            },
        },
    },
};
/**
 * Radio with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            label: new Map([
                ['id', 'radio-label'], ['name', 'Radio Label']
            ]),
            input: new Map([
                ['id', 'radio-input'], ['name', 'Radio Input']
            ]),
        }
    },
};
