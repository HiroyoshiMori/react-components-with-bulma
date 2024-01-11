import {Block} from "../../../../components";
import {deIndent} from "../../../../utils";

export default {
    title: 'React Component/Layout/Block',
    component: Block,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Basic block',
        docs: {
            description: {
                component: 'This component renders a basic spacer block container.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/block/',
            },
        },
    },
    argTypes: {
        children: {
            control: 'string',
            description: 'Contents of block',
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
            description: 'Style classes for block',
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
            description: 'Additional attributes for block',
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
 * Default block
 */
export const Default = {
    render: (args: any) => <Block {...args}>
        Block children
    </Block>
};
/**
 * Block with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: ['test-classes'],
    },
};
/**
 * Block with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'block-id'},
    },
};
/**
 * Block with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'block-id']
        ]),
    },
};
