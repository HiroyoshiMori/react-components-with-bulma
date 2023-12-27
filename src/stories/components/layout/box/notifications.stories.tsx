import React from 'react';
import {COLOR_TYPES, Notifications, NotificationsClasses} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Notifications',
    component: Notifications,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Notifications Box',
        docs: {
            description: {
                component: "This component shows notification box.<br>In Bulma doc: https://bulma.io/documentation/elements/notification/",
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Notification message',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        color: {
            control: 'select',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color of notification box',
            table: {
                type: {
                    summary: COLOR_TYPES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isLightColor: {
            control: 'boolean',
            description: 'Use lighter color',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for radio',
            table: {
                type: {
                    summary: 'NotificationsClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                button?: string[],
                             }
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for radio',
            table: {
                type: {
                    summary: 'NotificationsAttributes',
                    detail: deIndent(`
                            {
                                wrap?: HTMLAttributes<HTMLDivElement>,
                                button?: ButtonHTMLAttributes<HTMLButtonElement>
                            }
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Dataset for radio',
            table: {
                type: {
                    summary: 'NotificationsDatasets',
                    detail: deIndent(`
                            {
                                wrap?: Map<string, string>,
                                button?: Map<string, string>
                            }
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
    },
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
