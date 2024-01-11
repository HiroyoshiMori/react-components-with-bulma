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
                component: 'This component renders a white box container.<br >'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/box/',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Contents in a box',
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
            description: 'Style classes for box',
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
            description: 'Additional attributes for box',
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
            description: 'Datasets for block. "data-" will be added at the beginning of attributes.',
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
/**
 * Default box
 */
export const Default = {
    render: (args: any) => <Box {...args}>
        Child content
    </Box>,
};
/**
 * Box with style classes
 */
export const WithClasses = {
    ...Default,
    render: (args: any) => <Box {...args}>
        <a href="#">TEST</a>
    </Box>,
    args: {
        classes: ['class1', 'class2'],
    },
};
/**
 * Box with additional attributes
 */
export const WithAttributes = {
    ...Default,
    render: (args: any) => <Box {...args}>
        <a href="#">TEST</a>
    </Box>,
    args: {
        attributes: {'aria-label': 'BOX LABEL'},
    },
};
/**
 * Box with datasets
 */
export const WithDatasets = {
    ...Default,
    render: (args: any) => <Box {...args}>
        <a href="#">TEST</a>
    </Box>,
    args: {
        datasets: new Map([
            ['id', 'box-id'], ['name', 'BOX'],
        ]),
    },
};
