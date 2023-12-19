import React from 'react';
import { Button } from "../../../../components/mui/button";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default {
    component: Button,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Button label="Button" {...args} />,
};
export const Disabled = {
    ...Default,
    args: {
        label: 'Disabled',
        disabled: true,
    },
};
export const Primary = {
    ...Default,
    args: {
        type: 'primary',
        label: 'Primary',
    },
};
export const Link = {
    ...Default,
    args: {
        type: 'link',
        label: 'Link',
    },
};
export const Info = {
    ...Default,
    args: {
        type: 'info',
        label: 'Info',
    },
};
export const Success = {
    ...Default,
    args: {
        type: 'success',
        label: 'Success',
    },
};
export const Warning = {
    ...Default,
    args: {
        type: 'warning',
        label: 'Warning',
    },
};
export const Danger = {
    ...Default,
    args: {
        type: 'danger',
        label: 'Danger',
    },
};
export const PrimaryLight = {
    ...Default,
    args: {
        type: 'primary',
        colorLight: true,
        label: 'Primary w/Light Color'
    },
};
export const LinkLight = {
    ...Default,
    args: {
        type: 'link',
        colorLight: true,
        label: 'Link w/Light Color'
    },
};
export const InfoLight = {
    ...Default,
    args: {
        type: 'info',
        colorLight: true,
        label: 'Info w/Light Color'
    },
};
export const SuccessLight = {
    ...Default,
    args: {
        type: 'success',
        colorLight: true,
        label: 'Success w/Light Color'
    },
};
export const WarningLight = {
    ...Default,
    args: {
        type: 'warning',
        colorLight: true,
        label: 'Warning w/Light Color'
    },
};
export const DangerLight = {
    ...Default,
    args: {
        type: 'danger',
        colorLight: true,
        label: 'Danger w/Light Color'
    },
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
        label: 'Small'
    },
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
        label: 'Normal',
    },
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
        label: 'Medium',
    },
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
        label: 'Large',
    },
};
export const WithIcon = {
    ...Default,
    args: {
        awesomeIcon: icon({name: 'check', style: 'solid'}),
    },
};
export const WithIconRight = {
    ...Default,
    args: {
        awesomeIcon: icon({name: 'check', style: 'solid'}),
        iconPosition: 'right',
    },
};
