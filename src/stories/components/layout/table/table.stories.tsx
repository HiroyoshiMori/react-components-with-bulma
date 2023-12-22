import React from "react";
import {Table} from "../../../../components";

export default {
    component: Table,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Table
        body={{
            values: [
                {
                    values: [
                        {value: "TEST 1"},  // Do NOT use HTML tags in ReactNode in storybook, otherwise autodocs will be out of memory.
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                },
                {
                    values: [
                        {value: "TEST 1"},
                        {value: "TEST 2"},
                        {value: "TEST 3"},
                        {value: "TEST 4"},
                        {value: "TEST 5"},
                    ],
                },
            ],
        }}
        {...args}
    />,
};
export const IsBordered = {
    ...Default,
    args: {
        isBordered: true,
    },
};
export const IsStriped = {
    ...Default,
    args: {
        isStriped: true,
    },
};
export const IsNarrow = {
    ...Default,
    args: {
        isNarrow: true,
    },
};
export const IsHovarable = {
    ...Default,
    args: {
        isHoverable: true,
    },
};
export const IsFullWidth = {
    ...Default,
    args: {
        isFullWidth: true,
    },
};
export const InTableContainer = {
    ...Default,
    args: {
        inTableContainer: true,
    },
};
export const HasHeader = {
    ...Default,
    args: {
        headers: {
            values: [
                {
                    values: [
                        {value: "Header 1"},
                        {value: "Header 2"},
                        {value: "Header 3"},
                        {value: "Header 4"},
                        {value: "Header 5"},
                    ],
                },
            ],
        },
    },
};
export const HasFooter = {
    ...Default,
    args: {
        footers: {
            values: [
                {
                    values: [
                        {value: "Footer 1"},
                        {value: "Footer 2"},
                        {value: "Footer 3"},
                        {value: "Footer 4"},
                        {value: "Footer 5"},
                    ],
                },
            ],
        },
    },
};
