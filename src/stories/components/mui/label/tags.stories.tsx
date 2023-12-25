import React, {HTMLAttributes} from "react";
import {COLOR_TYPES, Tags} from "../../../../components";

export default {
    title: 'React Component/Element/Tags',
    component: Tags,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Tags Group',
        docs: {
            description: {
                component: "This component put several \"Tag\"s.",
            },
        },
    },
    argTypes: {
        tags: {
            control: 'object',
            description: 'Tag information',
            table: {
                type: {
                    summary: 'TagProps[]',
                    detail: 'See [Tag] Document',
                },
            },
        },
        hasAddons: {
            control: 'boolean',
            description: 'has "has-addon" class',
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
export const HasAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'tags'},
    },
};
export const HasDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'tags'], ['name', 'Tab Group']
        ]),
    },
};
export const Attributes = {
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
export const Datasets = {
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
