import React from 'react';
import {Dialog} from "../../../../components";
import {deIndent} from '../../../../utils';
import {action} from "@storybook/addon-actions";

export default {
    title: 'React Component/Layout/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Dialog Box',
        docs: {
            description: {
                component: 'This component renders dialog box.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/components/modal/',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Content of dialog box',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isActive: {
            control: 'boolean',
            description: 'Activate Dialog',
        },
        title: {
            control: 'text',
            description: 'Title for dialog',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
            },
        },
        onClose: {
            action: 'function',
            description: 'Function to close dialog',
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        noFooter: {
            control: 'boolean',
            description: 'No footer',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        buttonLabel: {
            control: 'text',
            description: 'Button label in dialog',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for dialog',
            table: {
                type: {
                    summary: 'DialogClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                header?: {
                                    wrap?: string[],
                                    title?: string[],
                                },
                                content?: string[],
                                footer?: {
                                    wrap?: string[],
                                    button?: string[],
                                },
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
            description: 'Additional attributes for dialog',
            table: {
                type: {
                    summary: 'DialogAttributes',
                    detail: deIndent(`
                            {
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
            description: 'Datasets for dialog. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'DialogDatasets',
                    detail: deIndent(`
                            {
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
/**
 * Default dialog
 */
export const Default = {
    render: (args: any) => <Dialog
        isActive={true}
        title="Dialog Box"
        onClose={action('onClose')}
        {...args}
    >
        <span>TEST</span>
    </Dialog>,
};
/**
 * Dialog modified button label
 */
export const ButtonLabel = {
    ...Default,
    args: {
        buttonLabel: 'CLOSE',
    },
};
/**
 * Dialog without footer
 */
export const WithoutFooter = {
    ...Default,
    args: {
        noFooter: true,
    },
};
/**
 * Dialog with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: {
            wrap: ['test-wrap'],
            header: {
                wrap: ['test-header-wrap'],
                title: ['test-header-title'],
            },
            content: ['test-content'],
            footer: {
                wrap: ['test-footer-wrap'],
                button: ['test-footer-button'],
            },
        },
    },
};
/**
 * Dialog with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
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
};
/**
 * Dialog with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
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
};
