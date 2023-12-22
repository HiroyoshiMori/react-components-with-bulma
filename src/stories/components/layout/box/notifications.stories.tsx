import React from 'react';
import {Notifications} from "../../../../components";

export default {
    component: Notifications,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Notifications {...args}>Notification</Notifications>,
};
export const Primary = {
    ...Default,
    args: {
        color: 'primary',
    },
};
export const Link = {
    ...Default,
    args: {
        color: 'link',
    },
};
export const Info = {
    ...Default,
    args: {
        color: 'info',
    },
};
export const Success = {
    ...Default,
    args: {
        color: 'success',
    },
};
export const Warning = {
    ...Default,
    args: {
        color: 'warning',
    },
};
export const Danger = {
    ...Default,
    args: {
        color: 'danger',
    },
};
export const LightPrimary = {
    ...Default,
    args: {
        color: 'primary',
        isLightColor: true,
    },
};
export const LightLink = {
    ...Default,
    args: {
        color: 'link',
        isLightColor: true,
    },
};
export const LightInfo = {
    ...Default,
    args: {
        color: 'info',
        isLightColor: true,
    },
};
export const LightSuccess = {
    ...Default,
    args: {
        color: 'success',
        isLightColor: true,
    },
};
export const LightWarning = {
    ...Default,
    args: {
        color: 'warning',
        isLightColor: true,
    },
};
export const LightDanger = {
    ...Default,
    args: {
        color: 'danger',
        isLightColor: true,
    },
};
