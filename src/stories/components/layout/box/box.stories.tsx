import {Box} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Box',
    component: Box,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'White box container',
        docs: {
            description: {
                component: "This component put a white \"Box\" container.<br>In Bulma doc: https://bulma.io/documentation/elements/box/",
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Contents in a box',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
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
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'DATA_ID'],
                                ['name', 'DATA NAME'],
                            ])
                            → data-id="DATA_ID" data-name="DATA NAME"
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
    render: (args: any) => <Box {...args}>
        Child content
    </Box>,
};
export const Additionals = {
    ...Default,
    render: (args: any) => <Box {...args}>
        <a href="#">TEST</a>
    </Box>,
    args: {
        classes: ['class1', 'class2'],
        attributes: {'aria-label': 'BOX LABEL'},
        datasets: new Map([
            ['id', 'box-id'], ['name', 'BOX'],
        ]),
    },
};
