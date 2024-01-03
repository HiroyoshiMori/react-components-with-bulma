import React from "react";
import {RadioGroup} from "../../../components";
import {deIndent} from '../../../utils';

export default {
    title: 'React Component/Form/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Radio Group',
        docs: {
            description: {
                component: "This component shows radio group for form.<br>In Bulma doc: https://bulma.io/documentation/form/radio/",
            },
        },
    },
    argTypes: {
        fieldName: {
            control: 'text',
            description: 'Field name for radio group',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        fields: {
            control: 'object',
            description: 'Field items in radio group',
            table: {
                type: {
                    summary: 'RadioGroupFieldsProps[]',
                    detail: deIndent(`
                            {
                                field: {
                                    name: string,
                                    key: string | number,
                                    value?: boolean | string | number,
                                    label?: ReactNode,
                                    disabled?: boolean,
                                } as RadioFields,
                                classes?: {
                                    label?: string[],
                                    input?: string[],
                                },
                                attributes?: {
                                    label?: HTMLAttributes<HTMLLabelElement>,
                                    input?: InputHTMLAttributes<HTMLInputElement>,
                                },
                                datasets?: {
                                    label?: Map<string, string>,
                                    input?: Map<string, string>,
                                },
                            }[],
                        `),
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
            description: 'Function called when one of radios in group is clicked',
            table: {
                type: {
                    summary: '(e: ChangeEvent<HTMLInputElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        prefix: {
            control: 'text',
            description: 'Prefix to add at the beginning of field name',
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
            description: 'Style classes for radio group',
            table: {
                type: {
                    summary: 'RadioGroupClasses',
                    detail: deIndent(`
                            {
                                group: string[],
                                radio: string[],
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
    },
};
export const Default = {
    render: (args: any) => <RadioGroup
        currentValue=""
        fieldName="radio_group"
        fields={[
            {field: {key: 'radio1'}},
            {field: {key: 'radio2', value: 'radio2Value'}},
            {field: {key: 'radio3', value: 'radio3Value', label: 'Radio3 Label'}},
            {field: {key: 'radio4', disabled: true}},
        ]}
        onChange={() => {return;}}
        {...args}
    />,
}
export const Grid = {
    ...Default,
    args: {
        classes: {
            group: ["columns"],
            radio: {
                wrap: ["column"],
                label: ["radio"],
            },
        }
    }
}

export const CheckedWithKey = {
    ...Default,
    args: {
        currentValue: "radio1",
    },
};
export const CheckedWithVal = {
    ...Default,
    args: {
        currentValue: "radio2Value",
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Radio Group',
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        fields: [
            {
                field: {
                    key: 'radio1',
                    datasets: {
                        wrap: new Map([
                            ['id', 'radio1-wrap'], ['name', 'Radio1 Wrap']
                        ]),
                        label: new Map([
                            ['id', 'radio1-label'], ['name', 'Radio1 Label']
                        ]),
                        input: new Map([
                            ['id', 'radio1-input'], ['name', 'Radio1 Input']
                        ]),
                    },
                }
            },
            {
                field: {
                    key: 'radio2',
                    value: 'radio2Value',
                    datasets: {
                        wrap: new Map([
                            ['id', 'radio2-wrap'], ['name', 'Radio2 Wrap']
                        ]),
                        label: new Map([
                            ['id', 'radio2-label'], ['name', 'Radio2 Label']
                        ]),
                        input: new Map([
                            ['id', 'radio2-input'], ['name', 'Radio2 Input']
                        ]),
                    },
                },
            },
            {
                field: {
                    key: 'radio3',
                    value: 'radio3Value',
                    label: 'Radio3 Value',
                    datasets: {
                        wrap: new Map([
                            ['id', 'radio3-wrap'], ['name', 'Radio3 Wrap']
                        ]),
                        label: new Map([
                            ['id', 'radio3-label'], ['name', 'Radio3 Label']
                        ]),
                        input: new Map([
                            ['id', 'radio3-input'], ['name', 'Radio3 Input']
                        ]),
                    },
                },
            },
            {
                field: {
                    key: 'radio4',
                    disabled: true,
                    datasets: {
                        wrap: new Map([
                            ['id', 'radio4-wrap'], ['name', 'Radio4 Wrap']
                        ]),
                        label: new Map([
                            ['id', 'radio4-label'], ['name', 'Radio4 Label']
                        ]),
                        input: new Map([
                            ['id', 'radio4-input'], ['name', 'Radio4 Input']
                        ]),
                    },
                },
            },
        ],
        datasets: new Map([
            ['id', 'radio-group'], ['name', 'Radio Group']
        ]),
    },
};
