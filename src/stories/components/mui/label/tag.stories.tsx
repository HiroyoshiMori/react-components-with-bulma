import {COLOR_TYPES, Tag} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Tags/Tag',
    component: Tag,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Tag Element in Tag Group',
        docs: {
            description: {
                component: "This component put \"Tag\".",
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Tag label',
            table: {
                type: {
                    summary: 'ReactNode',
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
                            onClick?: (e: React.MouseEvent) => void,
                            classes?: string[],
                            attributes?: HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
                            datasets?: CommonDataSet,
                        `),
                },
            },
        },
        color: {
            control: 'select',
            description: 'Color of tag',
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
            description: 'Make color more light',
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
            control: {type: 'range', min: 1, max: 6, step: 1},
            description: 'Size of tag',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isRounded: {
            control: 'boolean',
            description: 'Tag has rounded corners',
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
    render: (args: any) => <Tag {...args}>Example</Tag>
};
export const Primary = {
    ...Default,
    args: {
        color: 'primary',
    },
};
export const Link = {
    ...Default,
    args: {
        color: 'link',
    },
};
export const Info = {
    ...Default,
    args: {
        color: 'info',
    },
};
export const Success = {
    ...Default,
    args: {
        color: 'success',
    },
};
export const Warning = {
    ...Default,
    args: {
        color: 'warning',
    },
};
export const Danger = {
    ...Default,
    args: {
        color: 'danger',
    },
};
export const PrimaryLight = {
    ...Default,
    args: {
        color: 'primary',
        isLightColor: true,
    },
};
export const IsRounded = {
    ...Default,
    args: {
        isRounded: true,
    },
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
    },
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
    },
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
    },
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
    },
};
export const HasCombination = {
    ...Default,
    args: {
        hasCombination: true,
    },
};
export const LargeHasCombination = {
    ...Default,
    args: {
        size: 'large',
        hasCombination: true,
    },
};
