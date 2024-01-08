import React from "react";
import {Tags} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Tags',
    component: Tags,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Tags Group',
        docs: {
            description: {
                component: 'This component renders several tags.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/tag/',
            },
        },
    },
    argTypes: {
        tags: {
            control: 'object',
            description: 'Tag items in tag group',
            table: {
                type: {
                    summary: 'TagProps[]',
                    detail: 'See [Tag] Document',
                },
            },
        },
        hasAddons: {
            control: 'boolean',
            description: 'Attach tags together',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: "false",
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for tags',
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
            description: 'Additional attributes for tags',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
                    detail: deIndent(`
                            e.g.,{'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for tags. "data-" will be added at the beginning of attributes.',
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
                    summary: "new Map()",
                },
            },
        },
    },
};
/**
 * Default tag group
 */
export const Default = {
    render: (args: any) => <Tags
        tags={[
            {children: 'Tag A'},
            {children: 'Tag B'},
            {children: 'Tag C'},
            {children: 'Tag D'},
            {children: 'Tag E'},
        ]}
        {...args}
    />
};
/**
 * Tags attached together
 */
export const HasAddons = {
    ...Default,
    args: {
        tags: [
            {children: 'Tag A'},
            {useAnchor: true, children: 'v0.0.7', classes: ['is-info']},
        ],
        hasAddons: true,
    },
};
/**
 * Tags with close button
 */
export const HasAddonsClose = {
    ...Default,
    args: {
        tags: [
            {children: 'Tag A', color: 'info', isLightColor: true},
            {
                useAnchor: true,
                isAnchorClose: true,
                onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {console.debug(e)},
            },
        ],
        hasAddons: true,
    },
};
/**
 * Tags with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'tags'},
    },
};
/**
 * Tags with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'tags'], ['name', 'Tab Group']
        ]),
    },
};
/**
 * Tags with more additional attributes
 */
export const WithItemAttributes = {
    ...Default,
    args: {
        classes: ['tags-tags'],
        attributes: {'aria-label': 'tags'},
        tags: [
            {
                children: 'Tag A',
                classes: ['tags-tag-a'],
                attributes: {'aria-label': 'tag-A'},
            },
            {
                children: 'Tag B',
                classes: ['tags-tag-b'],
                attributes: {'aria-label': 'tag-B'},
            },
            {
                children: 'Tag C',
                classes: ['tags-tag-c'],
                attributes: {'aria-label': 'tag-C'},
            },
        ],
    },
};
/**
 * Tags with more datasets
 */
export const WithItemDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'tags'], ['name', 'Tags']
        ]),
        tags: [
            {
                children: 'Tag A',
                datasets: new Map([
                    ['id', 'tag-a'], ['name', 'Tag A']
                ]),
            },
            {
                children: 'Tag B',
                datasets: new Map([
                    ['id', 'tag-b'], ['name', 'Tag B']
                ]),
            },
            {
                children: 'Tag C',
                datasets: new Map([
                    ['id', 'tag-c'], ['name', 'Tag C']
                ]),
            },
        ],
    },
};
