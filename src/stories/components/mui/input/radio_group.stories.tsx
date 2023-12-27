import React from "react";
import {RadioGroup} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/RadioGroup',
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
                    summary: 'RadioGroupFields[]',
                    detail: deIndent(`
                            {
                                key: string | number,
                                value?: string | number,
                                label?: ReactNode,
                                disabled?: boolean,
                                attributes?: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    label?: HTMLAttributes<HTMLLabelElement>,
                                    input?: InputHTMLAttributes<HTMLInputElement>,
                                },
                                datasets?: {
                                    wrap?: Map<string, string>,
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
                    summary: 'string | number',
                },
            },
        },
        onChange: {
            action: 'function',
            description: 'Function called when one of radios in group is clicked',
        },
        prefix: {
            control: 'text',
            description: 'Prefix to add at the beginning of field name',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '',
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
        attributes: {
            control: 'object',
            description: 'attributes to add extra. ',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
            description: 'datasets which start with data-.',
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
export const Default = {
    render: (args: any) => <RadioGroup
        currentValue=""
        fieldName="radio_group"
        fields={[
            {key: 'radio1'},
            {key: 'radio2', value: 'radio2Value'},
            {key: 'radio3', value: 'radio3Value', label: 'Radio3 Value'},
            {key: 'radio4', disabled: true},
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
            },
            {
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
            {
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
            {
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
        ],
        datasets: new Map([
            ['id', 'radio-group'], ['name', 'Radio Group']
        ]),
    },
};
