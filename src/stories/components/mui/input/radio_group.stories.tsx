import React from "react";
import {RadioGroup} from "../../../../components";

export default {
    component: RadioGroup,
    tags: ['autodocs'],
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
