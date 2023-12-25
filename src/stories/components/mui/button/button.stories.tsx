import React from 'react';
import {Button, COLOR_TYPES} from "../../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

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
        type: {
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
            control: {type: 'range', min: 1, max: 6, step: 1},
            description: 'Button size',
            table: {
                type: {
                    summary: 'number',
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
            description: 'Prevent to add default classes such as "button"',
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
                    summary: 'IconDefinition',
                },
            },
        },
        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
            description: 'Which side icon placed',
            table: {
                type: {
                    summary: 'left|right',
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
                    summary: 'ButtonHTMLAttributes<HTMLButtonElement>',
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
    }
};
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
export const Disabled = {
    ...Default,
    args: {
        label: 'Disabled',
        disabled: true,
    },
};
export const Primary = {
    ...Default,
    args: {
        type: 'primary',
        label: 'Primary',
    },
};
export const Link = {
    ...Default,
    args: {
        type: 'link',
        label: 'Link',
    },
};
export const Info = {
    ...Default,
    args: {
        type: 'info',
        label: 'Info',
    },
};
export const Success = {
    ...Default,
    args: {
        type: 'success',
        label: 'Success',
    },
};
export const Warning = {
    ...Default,
    args: {
        type: 'warning',
        label: 'Warning',
    },
};
export const Danger = {
    ...Default,
    args: {
        type: 'danger',
        label: 'Danger',
    },
};
export const PrimaryLight = {
    ...Default,
    args: {
        type: 'primary',
        colorLight: true,
        label: 'Primary w/Light Color'
    },
};
export const LinkLight = {
    ...Default,
    args: {
        type: 'link',
        colorLight: true,
        label: 'Link w/Light Color'
    },
};
export const InfoLight = {
    ...Default,
    args: {
        type: 'info',
        colorLight: true,
        label: 'Info w/Light Color'
    },
};
export const SuccessLight = {
    ...Default,
    args: {
        type: 'success',
        colorLight: true,
        label: 'Success w/Light Color'
    },
};
export const WarningLight = {
    ...Default,
    args: {
        type: 'warning',
        colorLight: true,
        label: 'Warning w/Light Color'
    },
};
export const DangerLight = {
    ...Default,
    args: {
        type: 'danger',
        colorLight: true,
        label: 'Danger w/Light Color'
    },
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
        label: 'Small'
    },
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
        label: 'Normal',
    },
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
        label: 'Medium',
    },
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
        label: 'Large',
    },
};
export const WithIcon = {
    ...Default,
    args: {
        awesomeIcon: icon({name: 'check', style: 'solid'}),
    },
};
export const WithIconRight = {
    ...Default,
    args: {
        awesomeIcon: icon({name: 'check', style: 'solid'}),
        iconPosition: 'right',
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            "aria-haspop": true,
            "aria-controls": "dropdown-menu",
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'button'], ['name', 'Button']
        ]),
    },
};
