import React, {Fragment} from 'react';
import {Button, COLOR_TYPES, SIZES} from "../../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent} from '../../../../utils';
import {action} from "@storybook/addon-actions";
import {LinkTo} from "@storybook/addon-links";

export default {
    title: 'React Component/Element/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Button Element',
        docs: {
            description: {
                component: "This component shows \"Button\".<br>In Bulma doc: https://bulma.io/documentation/elements/button/",
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Button label',
            table: {
                type: {
                    summary: 'React.ReactNode',
                },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Function to be called when button is clicked.',
            table: {
                defaultValue: {
                    summary: "undefined",
                },
            },
        },
        colorType: {
            control: 'select',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color type of button',
            table: {
                type: {
                    summary: COLOR_TYPES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colorLight: {
            control: 'boolean',
            description: 'Use lighter color of colorType',
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
            control: "select",
            options: ['default'].concat(SIZES),
            mapping: {
                'Default': '',
            },
            description: 'Size of button and label',
            table: {
                type: {
                    summary: SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable button',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: false,
                },
            },
        },
        noDefaultClasses: {
            control: 'boolean',
            description: 'Prevent to add default classes to each elements such as ".button"',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: false,
                },
            },
        },
        awesomeIcon: {
            control: 'object',
            description: 'Icon Definition for Font Awesome',
            table: {
                type: {
                    summary: 'FontAwesomeIconProps',
                    detail: deIndent(`
                            @see https://github.com/FortAwesome/react-fontawesome/blob/976c1adc59934b34e52b11c03dda4bd69831a6df/index.d.ts#L23
                        `)
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
            description: 'Position icon will be placed',
            table: {
                type: {
                    summary: 'left|right',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style Classes',
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
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'ButtonHTMLAttributes<HTMLButtonElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" will be added at the beginning of each dataset attribute.',
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
    }
};

/**
 * Default button.<br />
 * Provide label and onClick
 */
export const Default = {
    render: (args: any) => {
        return (
            <Button
                label="Button"
                onClick={action('onClick')}
                {...args}
            />
        );
    },
};
/**
 * Button disabled.
 */
export const Disabled = {
    ...Default,
    args: {
        label: 'Disabled',
        disabled: true,
    },
};
/**
 * Button with color type
 */
export const ColorType = {
    ...Default,
    args: {
        colorType: 'primary',
        label: 'ColorType',
    },
};
/**
 * Button with color type of light color
 */
export const ColorTypeLight = {
    ...Default,
    args: {
        colorType: 'primary',
        colorLight: true,
        label: 'ColorType w/Light Color'
    },
};
/**
 * Button with element size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'small',
        label: 'Element Size'
    },
};
/**
 * Button with icon
 */
export const WithIcon = {
    ...Default,
    args: {
        awesomeIcon: {
            icon: icon({name: 'check', style: 'solid'}),
        },
        iconPosition: undefined,
    },
};
/**
 * Button with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            "aria-haspop": true,
            "aria-controls": "dropdown-menu",
        },
    },
};
/**
 * Button with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'button'], ['name', 'Button']
        ]),
    },
};
