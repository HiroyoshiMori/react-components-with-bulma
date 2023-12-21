import React from 'react';
import {Dialog} from "../../../../components";

export default {
    component: Dialog,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Dialog
        isActive={true}
        title="Dialog Box"
        {...args}
    >
        <span>TEST</span>
    </Dialog>,
};
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
