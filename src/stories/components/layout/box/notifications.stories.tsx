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
                component: 'This component renders notification box.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/notification/',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Message in notification box',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colorType: {
            control: 'select',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color type of notification box',
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
            description: 'Style classes for notification box',
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
            description: 'Additional attributes for notification box',
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
            description: 'Datasets for notification box. "data-" will be added at the beginning of attributes.',
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
/**
 * Default notification box
 */
export const Default = {
    render: (args: any) => <Notifications {...args}>Notification</Notifications>,
};
/**
 * Notification box with color type
 */
export const WithColorType = {
    ...Default,
    args: {
        colorType: 'primary',
        isLightColor: undefined,
    },
};
/**
 * Notification box with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: {
            wrap: ['test-wrap'],
            button: ['test-button'],
        },
    },
};
/**
 * Notification box with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            wrap: {'aria-label': 'Notification Wrap'},
            button: {'aria-label': 'Notification Button'},
        },
    },
};
/**
 * Notification box with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            wrap: new Map([
                ['id', 'notification-wrap'],
            ]),
            button: new Map([
                ['id', 'notification-button'],
            ]),
        },
    },
};
