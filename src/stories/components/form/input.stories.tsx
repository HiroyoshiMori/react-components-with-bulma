import React from "react";
import {
    FormInput,
} from "../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
// @ts-ignore
import SampleImage from '../../assets/sample_image.jpg';
import {action} from "@storybook/addon-actions";

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
export const NoWrap = {
    ...Default,
    args: {
        noWrap: true,
    },
};
export const Radio = {
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
export const Checkbox = {
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
export const Submit = {
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
export const SubmitImage = {
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
