import React from 'react';
import {Checkbox} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Checkbox Element',
        docs: {
            description: {
                component: 'This component renders checkbox.<br />'
                    + 'In Bulma doc: https://bulma.io/documentation/form/checkbox/',
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
            description: 'Value for checkbox. When undefined, id will be used instead.',
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
            description: 'Label for checkbox. When undefined, value will be used instead.',
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
            description: 'Disable checkbox',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        currentValues: {
            control: 'text',
            description: 'Current values for checkbox group',
            table: {
                type: {
                    summary: '(boolean | string | number)[]',
                },
            },
        },
        onChange: {
            action: 'function',
            description: 'Function called when checkbox value changed',
            table: {
                type: {
                    summary: '(e: ChangeEvent<HTMLInputElement>) => void',
                },
            },
        },
        prefix: {
            control: 'text',
            description: 'Prefix for field name of checkbox',
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
            description: 'Style classes for checkbox',
            table: {
                type: {
                    summary: 'CheckboxClasses',
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
            description: 'Additional attributes for checkbox',
            table: {
                type: {
                    summary: 'CheckboxAttributes',
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
            description: 'Dataset for checkbox. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'CheckboxDatasets',
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
    },
};
/**
 * Default checkbox
 */
export const Default = {
    render: (args: any) => <Checkbox
        name={'checkbox'}
        id={'id'}
        value={'checkbox value'}
        label={'Checkbox'}
        currentValues={["curValue"]}
        onChange={() => {return;}}
        {...args}
    />,
};
/**
 * Checked by id
 */
export const CheckedById = {
    ...Default,
    args: {
        label: 'Checked checkbox',
        value: "same value",
        currentValues: ["id"],
    },
};
/**
 * Checked by value
 */
export const Checked = {
    ...Default,
    args: {
        label: 'Checked checkbox',
        value: "same value",
        currentValues: ["same value"],
    },
};
/**
 * Checkbox without Id.<br />
 * Random ID will be generated.
 */
export const NoId = {
    ...Default,
    args: {
        id: undefined,
    },
};
/**
 * Checkbox without value.<br />
 * ID will be used as value.
 */
export const WithoutValue = {
    ...Default,
    args: {
        value: undefined,
    },
};
/**
 * Checkbox without label.<br />
 * Value will be used as label.
 */
export const WithoutLabel = {
    ...Default,
    args: {
        label: undefined,
    },
};
/**
 * Checkbox without value and label.<br />
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
 * Disabled checkbox
 */
export const Disabled = {
    ...Default,
    args: {
        label: 'Disabled Radio',
        disabled: true,
    },
};
/**
 * Checkbox with style class.<br />
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
 * Checkbox with style class.<br />
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
 * Checkbox with style class.<br />
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
 * Checkbox with additional attributes
 */
export const WithAttribute = {
    ...Default,
    args: {
        attributes: {
            label: {
                "aria-label": "Checkbox Label",
            },
            input: {
                "aria-label": "Checkbox Input",
            },
        },
    },
};
/**
 * Checkbox with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            label: new Map([
                ['id', 'radio-label'], ['name', 'Checkbox Label']
            ]),
            input: new Map([
                ['id', 'radio-input'], ['name', 'Checkbox Input']
            ]),
        },
    },
};
