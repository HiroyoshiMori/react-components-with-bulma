import React from 'react';
import {Button, COLOR_TYPES, SIZES} from "../../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Element/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Button Element',
        docs: {
            description: {
                component: 'This component renders Button element.<br />'
                    + 'In Bulma doc: https://bulma.io/documentation/elements/button/',
            },
        },
    },
    argTypes: {
        label: {
            control: 'object',
            description: 'Button label',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Function to be called when button is clicked.',
        },
        colorType: {
            control: 'select',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Button color',
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
            description: 'Make color lighter',
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
            description: 'Size of Button element',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Make button disabled',
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
            description: 'Prevent to add default classes such as "div.button"',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: false,
                },
            },
        },
        icon: {
            control: 'object',
            description: 'Icon definition for Font Awesome',
            table: {
                type: {
                    summary: 'FontAwesomeIconProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
            description: 'Which side icon is rendered',
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
            description: 'Style classes for button',
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
            description: 'Additional attributes for button',
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
            description: 'Datasets for button. "data-" will be added at the beginning of attributes.',
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
 * Default button
 */
export const Default = {
    render: (args: any) => {
        return (
            <Button
                label="Button"
                onClick={() => {}}
                {...args}
            />
        );
    },
};
/**
 * Disabled Button
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
export const WithColorType = {
    ...Default,
    args: {
        colorType: 'primary',
        label: 'Primary',
    },
};
/**
 * Button with color type of lighter color
 */
export const WithColorTypeLight = {
    ...Default,
    args: {
        colorType: 'primary',
        colorLight: true,
        label: 'Primary w/Light Color'
    },
};
/**
 * Button with size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'small',
        label: 'Small'
    },
};
/**
 * Button with icon
 */
export const WithIcon = {
    ...Default,
    args: {
        icon: {
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
