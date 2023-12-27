import React from 'react';
import {ProgressBar} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Progress bar',
    component: ProgressBar,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Progress bar using Dialog Box',
        docs: {
            description: {
                component: "This component shows progress bar.<br>In Bulma doc: https://bulma.io/documentation/elements/progress/",
            },
        },
    },
    argTypes: {
        isActive: {
            control: 'boolean',
            description: 'true when dialog is active',
        },
        title: {
            control: 'text',
            description: 'Dialog title',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        value: {
            control: 'number',
            description: 'Value of progress bar',
        },
        max: {
            control: 'number',
            description: 'Max value of progress bar',
        },
        onClose: {
            action: 'function',
            description: 'Function to close dialog',
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'ProgressBarClasses',
                    detail: deIndent(`
                            {
                                dialog?: {
                                    wrap?: string[],
                                    header?: string[],
                                    content?: string[],
                                    footer?: string[],
                                },
                                progressbar?: string[],
                            }
                        `),
                },
                defaultValue: {
                    summary: '[]',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'DialogAttributes',
                    detail: deIndent(`
                            {
                                dialog?: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    card?: HTMLAttributes<HTMLDivElement>,
                                    header?: {
                                        wrap?: HTMLAttributes<HTMLDivElement>,
                                        title?: HTMLAttributes<HTMLDivElement>,
                                        button?: HTMLAttributes<HTMLButtonElement>,
                                    },
                                    content?: HTMLAttributes<HTMLElement>,
                                    footer?: {,
                                        wrap?: HTMLAttributes<HTMLElement>,
                                        button?: HTMLAttributes<HTMLButtonElement>,
                                    },
                                },
                                progressbar?: HTMLAttributes<HTMLElement>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets',
            table: {
                type: {
                    summary: 'DialogDatasets',
                    detail: deIndent(`
                            {
                                dialog?: {
                                    wrap?: Map<string, string>,
                                    card?: Map<string, string>,
                                    header?: {
                                        wrap?: Map<string, string>,
                                        title?: Map<string, string>,
                                        button?: Map<string, string>,
                                    },
                                    content?: Map<string, string>,
                                    footer?: {,
                                        wrap?: Map<string, string>,
                                        button?: Map<string, string>,
                                    },
                                },
                                progressbar?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'new Map()',
                },
            },
        },
    },
};
export const Default = {
    render: (args: any) => <ProgressBar
        isActive={true}
        title="Progress Bar"
        value={1}
        max={100}
        onClose={() => {return;}}
        {...args}
    />,
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            progressbar: {'aria-label': 'Progress Bar'},
            dialog: {
                wrap: {'aria-label': 'Dialog Box'},
                card: {'aria-label': 'Dialog Box Card'},
                header: {
                    wrap: {'aria-label': 'Dialog Box Header'},
                    title: {'aria-label': 'Dialog Box Header Title'},
                    button: {'aria-label': 'Dialog Box Header Button'},
                },
                content: {'aria-label': 'Dialog Box Content'},
                footer: {
                    wrap: {'aria-label': 'Dialog Box Footer'},
                    button: {'aria-label': 'Dialog Box Footer Button'},
                },
            },
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            progressbar: new Map([
                ['id', 'progressbar'], ['name', 'dialog-progressbar'],
            ]),
            dialog: {
                wrap: new Map([
                    ['id', 'wrap'], ['name', 'dialog-wrap'],
                ]),
                card: new Map([
                    ['id', 'card'], ['name', 'dialog-card'],
                ]),
                header: {
                    wrap: new Map([
                        ['id', 'header-wrap'], ['name', 'dialog-header-wrap'],
                    ]),
                    title: new Map([
                        ['id', 'header-title'], ['name', 'dialog-header-title'],
                    ]),
                    button: new Map([
                        ['id', 'header-button'], ['name', 'dialog-header-button'],
                    ]),
                },
                content: new Map([
                    ['id', 'content'], ['name', 'dialog-content'],
                ]),
                footer: {
                    wrap: new Map([
                        ['id', 'footer-wrap'], ['name', 'dialog-footer-wrap'],
                    ]),
                    button: new Map([
                        ['id', 'footer-button'], ['name', 'dialog-footer-button'],
                    ]),
                },
            },
        },
    },
};
