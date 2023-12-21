import React from 'react';
import {Radio} from "../../../../components";

export default {
    component: Radio,
    tags: ['autodocs'],
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
