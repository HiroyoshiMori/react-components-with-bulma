import React from "react";
import {
    FormInput,
} from "../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
// @ts-ignore
import SampleImage from '../../assets/sample_image.jpg';
import {action} from "@storybook/addon-actions";
import {getFormattedDate} from "../../../utils";
import MockDate from "mockdate";

MockDate.set(new Date('2023-07-15 09:31:45'));

export default {
    title: 'React Component/Form/Input',
    component: FormInput,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Form Input element',
        docs: {
            description: {
                component: "This component shows input element for form.<br>In Bulma doc: https://bulma.io/documentation/form/input/",
            },
        },
    },
};

export const Default = {
    render: (args: any) => <FormInput
        type={'text'}
        name={'FormInput'}
        value={'Text Value'}
        onChange={action('onClick')}
        label={{
            children: 'Label',
        }}
        iconLeft={{
            icon: {icon: icon({name: 'envelope'})},
        }}
        iconRight={{
            icon: {icon: icon({name: 'check'})},
        }}
        {...args}
    />,
};
export const NoDivWrap = {
    ...Default,
    args: {
        noWrap: true,
    },
};
export const TypeRadio = {
    args: {
        type: 'radio',
        name: 'FormRadio',
        items: [
            {
                field: {key: 'Radio1'},
            },
            {
                field: {key: 'Radio2', value: 'Radio 2'},
            },
            {
                field: {key: 'Radio3', value: 'Radio 3', label: 'Radio 3 Label'},
            },
        ],
        currentValue: 'Radio 2',
        onChange: action('onClick'),
    },
};
export const TypeCheckbox = {
    args: {
        type: 'checkbox',
        name: 'FormCheckbox',
        items: [
            {
                field: {key: 'Checkbox1'},
            },
            {
                field: {key: 'Checkbox2', value: 'Checkbox 2'},
            },
            {
                field: {key: 'Checkbox3', value: 'Checkbox 3', label: 'Checkbox 3 Label'},
            },
        ],
        currentValues: ['Checkbox 2', 'Checkbox3'],
        onChange: action('onClick'),
    },
};
export const TypeSubmit = {
    ...Default,
    args: {
        type: 'submit',
        name: 'Form Submit',
        additionalProps: {
            type: 'submit',
            value: 'Submit Button',
            colorType: 'primary',
        },
        onClick: action('onClick'),
    },
};
export const TypeImage = {
    ...Default,
    args: {
        type: 'image',
        name: 'Form Submit',
        additionalProps: {
            type: 'image',
            src: SampleImage,
            alt: 'Submit Image',
        },
        onClick: action('onClick'),
    },
};
export const TypeColor = {
    ...Default,
    args: {
        type: 'color',
        name: 'Form Color',
    },
};
export const TypeRange = {
    ...Default,
    args: {
        type: 'range',
        name: 'Form Range',
        value: 10,
        attributes: {
            input: {min: 1, max: 30},
        },
    },
};
export const TypeDate = {
    ...Default,
    args: {
        type: 'date',
        name: 'Form Date',
        value: getFormattedDate(new Date(), 'yyyy-MM-dd'),
    },
};
export const TypeDateTimeLocal = {
    ...Default,
    args: {
        type: 'datetime-local',
        name: 'Form DateTime Local',
        value: getFormattedDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    },
};
export const TypeMonth = {
    ...Default,
    args: {
        type: 'month',
        name: 'Form Month',
        value: getFormattedDate(new Date(), 'yyyy-MM'),
    },
};
export const TypeTime = {
    ...Default,
    args: {
        type: 'time',
        name: 'Form Time',
        value: getFormattedDate(new Date(), 'hh:mm'),
    },
};
export const TypeWeek = {
    ...Default,
    args: {
        type: 'week',
        name: 'Form Week',
        value: getFormattedDate(new Date(),'yyyy-Www'),
    },
};
export const TypeHidden = {
    ...Default,
    args: {
        type: 'hidden',
        name: 'Form Hidden',
        label: undefined,
    },
};
export const TypeFile = {
    ...Default,
    args: {
        type: 'file',
        name: 'Form File',
        buttonLabel: 'Choose a file...',
        attributes: {
            wrap: {'aria-label': 'File-wrap'},
            control: {'aria-label': 'File-control'},
            input: {'aria-label': 'File-label'},
        },
        datasets: {
            wrap: new Map([['id', 'File-wrap-id']]),
            control: new Map([['id', 'File-control-id']]),
            input: new Map([['id', 'File-input-id']]),
        },
        classes: {
            wrap: ['test-wrap'],
            control: ['test-control'],
            div: ['test-div'],
            label: ['test-label'],
            input: ['test-input'],
            cta: ['test-cta'],
            icon: ['test-icon'],
            labelSpan: ['test-label-span'],
            fileNameLabel: ['test-file-name-label'],
        },
    },
};
