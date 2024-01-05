import {action} from "@storybook/addon-actions";
import {Select} from "../../../../components";
import {COLOR_TYPES, SIZES, STATES} from "../../../../components";
import {deIndent} from "../../../../utils";

export default {
    title: 'React Component/Element/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Select Element',
        docs: {
            description: {
                component: "This component shows select for form.<br>In Bulma doc: https://bulma.io/documentation/form/select/",
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Field name',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        id: {
            control: 'text',
            description: 'Field ID',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        options: {
            control: 'object',
            description: 'Options to show',
            table: {
                type: {
                    summary: '(OptionProps|OptGroupProps)[]',
                    detail: deIndent(`
                            ({
                                value: string,
                                disabled?: boolean,
                                label?: string,
                                selected?: boolean,
                                classes?: string[],
                                attributes?: OptionHTMLAttributes<HTMLOptionElement>,
                                datasets?: Map<string, string>,
                            } as OptionProps | {
                                isOptGroup: true,
                                label: string,
                                options: OptionProps[],
                                currentValues?: string[],
                                disabled?: boolean,
                                classes?: {
                                    optgroup?: string[],
                                    option?: string[],
                                },
                                attributes?: OptgroupHTMLAttributes<HTMLOptGroupElement>,
                                datasets?: Map<string, string?,
                            } as OptGroupProps)[]
                        `),
                },
            },
        },
        currentValues: {
            control: 'object',
            description: 'Values currently chosen',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: '[]',
                },
            },
        },
        multiple: {
            control: 'boolean',
            description: 'Enable to choose multiple options in the list',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        size: {
            control: 'number',
            description: 'The number of rows in the list that should be visible at one time',
            table: {
                type: {
                    summary: 'number',
                },
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
            description: 'Colors',
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
            options: ['default'].concat(STATES),
            mapping: {
                Default: '',
            },
            description: '',
            table: {
                type: {
                    summary: STATES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        fontSize: {
            control: 'select',
            options: ['default'].concat(SIZES),
            mapping: {
                Default: '',
            },
            description: 'Font size',
            table: {
                type: {
                    summary: SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onChange: {
            action: 'function',
            description: 'Function called when value changed',
            table: {
                type: {
                    summary: '(e: React.ChangeEvent<HTMLElement>) => void',
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
                    summary: 'SelectClasses',
                    detail: deIndent(`
                            {
                                div?: string[],
                                select?: string[],
                                optgroup?: string[],
                                option?: string[], 
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
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'SelectAttributes',
                    detail: deIndent(`
                            {
                                div?: HTMLAttributes<HTMLDivElement>,
                                select?: SelectHTMLAttributes<HTMLSelectElement>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets',
            table: {
                type: {
                    summary: 'SelectDatasets',
                    detail: deIndent(`
                            {
                                div?: Map<string, string>,
                                select?: Map<string, string>,
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
    render: (args: any) => <Select
        name={'Select'}
        options={[
            {
                isOptGroup: true,
                label: 'OptGroup 1',
                options: [
                    {value: 'Option1'},
                    {value: 'Option2', label: 'Option 2'},
                    {value: 'Option3', disabled: true},
                ],
            },
            {value: 'Option4', label: 'Option 4'},
            {value: 'Option5'},
        ]}
        currentValues={[
            'option1',
            'option4',
        ]}
        onChange={action('onChange')}
        {...args}
    />,
};
export const Multiple = {
    ...Default,
    args: {
        multiple: true,
    },
};
export const SizeWithoutMultiple = {
    ...Default,
    args: {
        size: 3,
    },
};
export const SizeWithMultiple = {
    ...Default,
    args: {
        multiple: true,
        size: 3,
    },
};
export const ColorType = {
    ...Default,
    args: {
        colorType: 'primary',
    },
};
export const State = {
    ...Default,
    args: {
        state: 'hoverable',
    },
};
export const FontSize = {
    ...Default,
    args: {
        fontSize: 'small',
    },
};
export const WithClasses = {
    ...Default,
    args: {
        classes: {
            div: ['test-div-class'],
            select: ['test-select-class'],
            optgroup: ['test-optgroup-class'],
            option: ['test-option-class'],
        },
        options: [
            {
                isOptGroup: true,
                label: 'OptGroup 1',
                options: [
                    {value: 'Option1', classes: ['test-option1']},
                    {value: 'Option2', label: 'Option 2', classes: ['test-option2']},
                    {value: 'Option3', disabled: true},
                ],
                classes: {
                    optgroup: ['test-optgroup1'],
                    option: ['test-optgroup1-option'],
                },
            },
            {value: 'Option4', label: 'Option 4', classes: ['test-option4']},
            {value: 'Option5'},
        ],
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            div: {'aria-label': 'Div Label'},
            select: {'aria-label': 'Select Label'},
        },
        options: [
            {
                isOptGroup: true,
                label: 'OptGroup 1',
                options: [
                    {value: 'Option1', attributes: {'aria-label': 'Option1 Label'}},
                    {value: 'Option2', label: 'Option 2', attributes: {'aria-label': 'Option2 Label'}},
                    {value: 'Option3', disabled: true},
                ],
                attributes: {'aria-label': 'OptGroup1 Label'},
            },
            {value: 'Option4', label: 'Option 4', attributes: {'aria-label': 'Option4 Label'}},
            {value: 'Option5'},
        ],
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            div: new Map([['id', 'select-div']]),
            select: new Map([['id', 'select-select']]),
        },
        options: [
            {
                isOptGroup: true,
                label: 'OptGroup 1',
                options: [
                    {value: 'Option1', datasets: new Map([['id', 'select-option1']]),},
                    {value: 'Option2', label: 'Option 2', datasets: new Map([['id', 'select-option2']]),},
                    {value: 'Option3', disabled: true},
                ],
                datasets: new Map([['id', 'select-optgroup1']]),
            },
            {value: 'Option4', label: 'Option 4', datasets: new Map([['id', 'select-option4']]),},
            {value: 'Option5'},
        ],
    },
};
