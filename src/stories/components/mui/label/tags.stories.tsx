import React from "react";
import {Tags} from "../../../../components";

export default {
    component: Tags,
    tags: ['autodocs'],
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
            {children: 'Tag A', color: 'info', isLight: true},
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
