import React from 'react';
import { Label } from "../../../../components";
import {Fragment} from "react";

export default {
    title: 'React Component/Element/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Label Element',
        docs: {
            description: {
                component: "This component put \"label\".",
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label string. ignored when children specified',
            if: {arg: 'children', exists: false},
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Child element. is optional when label is specified',
            if: {arg: 'label', exists: false},
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        htmlFor: {
            control: 'text',
            description: 'specify for what element this label is',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style Classes to apply',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: "[]",
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'attributes to add extra. ',
            table: {
                type: {
                    summary: 'LabelHTMLAttributes<HTMLLabelElement>',
                    detail: ''
                        + 'e.g.,\n'
                        + "{'aria-label': 'LABEL'}\n"
                        + '',
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'datasets which start with data-.',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: ''
                        + 'e.g.,\n'
                        + "new Map([\n"
                        + "  ['id', 'DATA_ID'],\n"
                        + "  ['name', 'DATA NAME'],\n"
                        + "])\n"
                        + '→ data-id="DATA_ID" data-name="DATA NAME" \n'
                        + '',
                },
                defaultValue: {
                    summary: "new Map()",
                },
            },
        },
    },
};
export const Default = {
    render: (args: any) => <Label label="Label" {...args} />,
}
export const HasChildren = {
    ...Default,
    args: {
        children: (
            <Fragment>
                <span>Child Element</span>
            </Fragment>
        )
    }
}
export const HasClassesBgPrimary = {
    ...Default,
    args: {
        label: 'Has Classes',
        classes: ['has-background-primary', 'p-1']
    }
}
export const HasChildrenClassesBgPrimary = {
    ...Default,
    args: {
        children: (
            <Fragment>
                <span>Child Element</span>
            </Fragment>
        ),
        classes: ['has-background-primary', 'p-1']
    }
}
export const HasLabelChildren = {
    ...Default,
    args: {
        label: 'Has Label/Children - Label',
        children: (
            <Fragment>
                <span>Has Label/ Children - Children</span>
            </Fragment>
        )
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Label'},
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'label'], ['name', 'Label']
        ]),
    },
};
