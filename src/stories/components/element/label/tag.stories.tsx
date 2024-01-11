import {
    COLOR_TYPES, SIZES,
    Tag,
} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Tags/Tag',
    component: Tag,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Tag element in Tag Group',
        docs: {
            description: {
                component: 'This component renders tag.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/tag/',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Label for tag',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        useAnchor: {
            control: 'boolean',
            description: 'Use anchor tag to surround children',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        isAnchorClose: {
            control: 'boolean',
            description: 'Anchor is for close icon',
            if: {arg: 'useAnchor', eq: true},
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        onClick: {
            action: 'function',
            description: 'Click event when tag is clicked',
            if: {arg: 'useAnchor', eq: true},
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hasCombination: {
            control: 'boolean',
            description: 'Tags are combined with each 2',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        combinations: {
            control: 'object',
            description: 'Properties when combined',
            if: {arg: 'hasCombination', eq: true},
            table: {
                type: {
                    summary: 'TagCombinationProps',
                    detail: deIndent(`
                            {
                                onClick?: (e: React.MouseEvent) => void,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
                                datasets?: CommonDataSet,
                            }
                        `),
                },
            },
        },
        colorType: {
            control: 'select',
            description: 'Color type of tag',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            table: {
                type: {
                    summary: COLOR_TYPES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isLightColor: {
            control: 'boolean',
            description: 'Use lighter color type of tag',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: false,
                },
            },
        },
        size: {
            control: 'select',
            options: ['default'].concat(SIZES),
            mapping: {
                Default: '',
            },
            description: 'Size of tag',
            table: {
                type: {
                    summary: SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isRounded: {
            control: 'boolean',
            description: 'Use rounded corners',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for tag',
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
            description: 'Additional attributes for tag',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>',
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
            description: 'Datasets for tag. "data-" will be added at the beginning of attributes.',
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
/**
 * Default tag
 */
export const Default = {
    render: (args: any) => <Tag {...args}>Example</Tag>
};
/**
 * Tag with color style
 */
export const WithColorStyle = {
    ...Default,
    args: {
        color: 'primary',
        isLightColor: undefined,
    },
};
/**
 * Tag with rounded corners
 */
export const IsRounded = {
    ...Default,
    args: {
        isRounded: true,
    },
};
/**
 * Tag with size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'small',
    },
};
/**
 * Tag with combination
 */
export const HasCombination = {
    ...Default,
    args: {
        hasCombination: true,
    },
};
/**
 * Tag with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: ['test-class'],
    },
};
/**
 * Tag with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Tag'},
    },
};
/**
 * Tag with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'tag-id']
        ]),
    },
};
