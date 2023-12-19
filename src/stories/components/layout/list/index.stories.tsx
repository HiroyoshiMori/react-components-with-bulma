import React from 'react';
import {List} from "../../../../components/layout/list";

export default {
    component: List,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <List
        items={{
            data: [
                {
                    columns: [
                        {value: "Column A"},
                        {value: "Column B"},
                        {value: "Column C"},
                        {value: "Column D"},
                        {value: "Column E"},
                        {value: "Column F"},
                    ],
                },
                {
                    columns: [
                        {value: "Column 2A"},
                        {value: "Column 2B"},
                        {value: "Column 2C"},
                        {value: "Column 2D"},
                        {value: "Column 2E"},
                        {value: "Column 2F"},
                    ],
                },
            ],
            type: 'default',
        }}
        headers={[
            {value: 'Header A'},
            {value: 'Header B'},
            {value: 'Header C'},
            {value: 'Header D'},
            {value: 'Header E'},
            {value: 'Header F'},
        ]}
        {...args}
    />,
};
export const InConsistent = {
    ...Default,
    args: {
        items: {
            data: [
                {
                    columns: [
                        {value: "Column A"},
                        {value: "Column B"},
                        {value: "Column C"},
                        {value: "Column D"},
                        {value: "Column E"},
                        {value: "Column F"},
                        {value: "Column G"},
                    ],
                },
                {
                    columns: [
                        {value: "Column 2A"},
                        {value: "Column 2B"},
                        {value: "Column 2C"},
                        {value: "Column 2D"},
                        {value: "Column 2E"},
                    ],
                },
            ],
        },
    },
};
