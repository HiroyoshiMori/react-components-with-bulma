import React from 'react';
import {Checkbox, CheckboxFields} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Checkbox Element',
        docs: {
            description: {
                component: "This component shows checkbox for form.<br>In Bulma doc: https://bulma.io/documentation/form/checkbox/",
            },
        },
    },
    argTypes: {
        field: {
            control: 'object',
            description: 'Field data for checkbox',
            table: {
                type: {
                    summary: "CheckboxFields",
                    detail: deIndent(`
                            {
                                name: string,
                                key: string,
                                value?: string,
                                label?: ReactNode,
                                disabled: boolean,
                            }
                        `),
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
                                wrap?: string[],
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
                                wrap?: HTMLAttributes<HTMLDivElement>,
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
            description: 'Dataset for checkbox',
            table: {
                type: {
                    summary: 'CheckboxDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
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
export const Default = {
    render: (args: any) => <Checkbox
        field={{
            name: 'checkbox',
            key: 'key',
            value: 'checkbox value',
            label: 'Checkbox',
        }}
        currentValues={["curValue"]}
        onChange={() => {return;}}
        {...args}
    />,
};

export const Checked = {
    ...Default,
    args: {
        field: {
            label: 'Checked checkbox',
            value: "same value",
        },
        currentValues: ["same value"],
    },
};
export const Disabled = {
    ...Default,
    args: {
        field: {
            label: 'Disabled Radio',
            disabled: true,
        },
    },
};
export const M5 = {
    ...Default,
    args: {
        classes: {
            input: ['m-5'],
        },
    },
};
export const ML5 = {
    ...Default,
    args: {
        classes: {
            input: ['ml-5'],
        },
    },
};
export const MR5 = {
    ...Default,
    args: {
        classes: {
            input: ['mr-5'],
        },
    },
};
export const WithAttribute = {
    ...Default,
    args: {
        attributes: {
            wrap: {
                "aria-label": "Checkbox",
            },
            label: {
                "aria-label": "Checkbox Label",
            },
            input: {
                "aria-label": "Checkbox Input",
            },
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            wrap: new Map([
                ['id', 'radio-wrap'], ['name', 'Checkbox Wrap']
            ]),
            label: new Map([
                ['id', 'radio-label'], ['name', 'Checkbox Label']
            ]),
            input: new Map([
                ['id', 'radio-input'], ['name', 'Checkbox Input']
            ]),
        }
    },
};
