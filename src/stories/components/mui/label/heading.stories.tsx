import React from 'react';
import { Heading } from "../../../../components/mui/label";

export default {
    component: Heading,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Heading label="Label" {...args} />,
}

export const H1 = {
    ...Default,
    args: {
        size: 1,
        label: 'H1',
    },
};
export const H2 = {
    ...Default,
    args: {
        size: 2,
        label: 'H2',
    },
};
export const H3 = {
    ...Default,
    args: {
        size: 3,
        label: 'H3',
    },
};
export const H4 = {
    ...Default,
    args: {
        size: 4,
        label: 'H4',
    },
};
export const H5 = {
    ...Default,
    args: {
        size: 5,
        label: 'H5',
    },
};
export const H6 = {
    ...Default,
    args: {
        size: 6,
        label: 'H6',
    },
};
export const H3_Size0 = {
    ...Default,
    args: {
        size: 0,
        label: 'H3',
    },
};
export const H3_Size7 = {
    ...Default,
    args: {
        size: 7,
        label: 'H3',
    },
};
export const DefaultWithClasses = {
    ...Default,
    args: {
        classes: ['has-background-primary', 'p-1']
    },
};
export const WithSizeClasses = {
    ...Default,
    args: {
        size: 1,
        classes: ['is-6']
    },
};
