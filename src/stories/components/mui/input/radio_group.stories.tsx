import React from "react";
import {RadioGroup} from "../../../../components/mui/input";

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
        onChange={(e: React.MouseEvent<HTMLInputElement>) => {return;}}
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
