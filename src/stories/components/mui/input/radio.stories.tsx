import React from 'react';
import {Radio} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/RadioGroup/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Radio Element',
        docs: {
            description: {
                component: "This component shows radio for form.<br>In Bulma doc: https://bulma.io/documentation/form/radio/",
            },
        },
    },
    argTypes: {
        field: {
            control: 'object',
            description: 'Field data for radio',
            table: {
                type: {
                    summary: "{name: string;} & RadioGroupFields",
                    detail: deIndent(`
                            {
                                name: string,
                                key: string,
                                value?: string,
                                label?: ReactNode,
                                disabled: boolean,
                                attributes: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    label?: HTMLAttributes<HTMLLabelElement>,
                                    input?: InputHTMLAttributes<HTMLInputElement>,
                                },
                                datasets: {
                                    wrap?: Map<string, string>,
                                    label?: Map<string, string>,
                                    input?: Map<string, string>,
                                },
                            }
                        `),
                },
            },
        },
        currentValue: {
            control: 'text',
            description: 'Current value for radio group',
            table: {
                type: {
                    summary: 'string | number',
                },
            },
        },
        onChange: {
            action: 'function',
            description: 'Function called when radio value changed',
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
                    summary: '{wrap?: string[], label?: string[], input?: string[]}'
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
                    summary: deIndent(`
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
            description: 'Dataset for radio',
            table: {
                type: {
                    summary: deIndent(`
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
    render: (args: any) => <Radio
        field={{
            name: 'radio',
            key: 'key',
            value: 'radio value',
            label: 'Radio',
        }}
        currentValue="curValue"
        onChange={() => {return;}}
        {...args}
    />,
};

export const Checked = {
    ...Default,
    args: {
        field: {
            label: 'Checked Radio',
            value: "same value",
        },
        currentValue: "same value",
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
                "aria-label": "Radio",
            },
            label: {
                "aria-label": "Radio Label",
            },
            input: {
                "aria-label": "Radio Input",
            },
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            wrap: new Map([
                ['id', 'radio-wrap'], ['name', 'Radio Wrap']
            ]),
            label: new Map([
                ['id', 'radio-label'], ['name', 'Radio Label']
            ]),
            input: new Map([
                ['id', 'radio-input'], ['name', 'Radio Input']
            ]),
        }
    },
};
