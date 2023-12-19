import React from 'react';
import {Radio} from "../../../../components/mui/input";

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
        onChange={(e) => {return;}}
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
