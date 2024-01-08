import React from "react";
import {CheckboxGroup} from "../../../components";
import {deIndent} from '../../../utils';

export default {
    title: 'React Component/Form/CheckboxGroup',
    component: CheckboxGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Checkbox Group',
        docs: {
            description: {
                component: "This component shows checkbox group for form.<br>In Bulma doc: https://bulma.io/documentation/form/checkbox/",
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Field name for checkbox group',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        fields: {
            control: 'object',
            description: 'Field items in checkbox group',
            table: {
                type: {
                    summary: 'CheckboxGroupFieldsProps[]',
                    detail: deIndent(`
                            {
                                name: string,
                                id: string,
                                value?: boolean | string | number,
                                label?: ReactNode,
                                disabled?: boolean,
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
        currentValues: {
            control: 'text',
            description: 'Current values for checkbox group',
            table: {
                type: {
                    summary: '(boolean | string | number)[]',
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
        onChange: {
            action: 'function',
            description: 'Function called when one of checkbox in group is clicked',
            table: {
                type: {
                    summary: '(e: ChangeEvent<HTMLInputElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for checkbox group',
            table: {
                type: {
                    summary: 'CheckboxGroupClasses',
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
    render: (args: any) => <CheckboxGroup
        currentValues={[]}
        name="radio_group"
        fields={[
            {id: 'check1'},
            {id: 'check2', value: 'check2Value'},
            {id: 'check3', value: 'check3Value', label: 'Check3 Label'},
            {id: 'check4', disabled: true},
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

export const CheckedWithID = {
    ...Default,
    args: {
        currentValues: ["check1", "check3"],
    },
};
export const CheckedWithVal = {
    ...Default,
    args: {
        currentValues: ["check2Value"],
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        fields: [
            {
                id: 'check1',
                attributes: {
                    label: {'aria-label': 'Check1 Label'},
                    input: {'aria-label': 'Check1 Input'},
                },
            },
            {
                id: 'check2',
                value: 'check2Value',
                attributes: {
                    label: {'aria-label': 'Check2 Label'},
                    input: {'aria-label': 'Check2 Input'},
                },
            },
            {
                id: 'check3',
                value: 'check3Value',
                label: 'Check3 Value',
                attributes: {
                    label: {'aria-label': 'Check3 Label'},
                    input: {'aria-label': 'Check3 Input'},
                },
            },
            {
                id: 'check4',
                disabled: true,
                attributes: {
                    label: {'aria-label': 'Check4 Label'},
                    input: {'aria-label': 'Check4 Input'},
                },
            },
        ],
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        fields: [
            {
                id: 'check1',
                datasets: {
                    label: new Map([
                        ['id', 'check1-label'], ['name', 'Check1 Label']
                    ]),
                    input: new Map([
                        ['id', 'check1-input'], ['name', 'Check1 Input']
                    ]),
                },
            },
            {
                id: 'check2',
                value: 'check2Value',
                datasets: {
                    label: new Map([
                        ['id', 'check2-label'], ['name', 'Check2 Label']
                    ]),
                    input: new Map([
                        ['id', 'check2-input'], ['name', 'Check2 Input']
                    ]),
                },
            },
            {
                id: 'check3',
                value: 'check3Value',
                label: 'Check3 Value',
                datasets: {
                    label: new Map([
                        ['id', 'check3-label'], ['name', 'Check3 Label']
                    ]),
                    input: new Map([
                        ['id', 'check3-input'], ['name', 'Check3 Input']
                    ]),
                },
            },
            {
                id: 'check4',
                disabled: true,
                datasets: {
                    label: new Map([
                        ['id', 'check4-label'], ['name', 'Check4 Label']
                    ]),
                    input: new Map([
                        ['id', 'check4-input'], ['name', 'Check4 Input']
                    ]),
                },
            },
        ],
    },
};
