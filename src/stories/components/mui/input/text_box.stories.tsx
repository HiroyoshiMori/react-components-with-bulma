import React from 'react';
import {COLOR_TYPES, STATES, TextBox} from "../../../../components";

export default {
    title: 'React Component/Element/TextBox',
    component: TextBox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Text Box Element',
        docs: {
            description: {
                component: "This component shows text box for form.<br>In Bulma doc: https://bulma.io/documentation/form/input/",
            },
        },
    },
    argTypes: {
        fieldName: {
            control: 'text',
            description: 'Field name',
        },
        fieldType: {
            control: 'select',
            options: ['text', 'password', 'email', 'tel'],
            description: 'Field type',
            table: {
                type: {
                    summary: 'text|password|email|tel',
                },
                defaultValue: {
                    summary: 'text',
                },
            },
        },
        value: {
            control: 'text',
            description: 'Field value',
        },
        onChange: {
            action: 'function',
            description: 'Function called when value is changed',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder which is shown when value is empty',
        },
        colorType: {
            control: 'select',
            options: (['default']).concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color of text box',
            table: {
                type: {
                    summary: COLOR_TYPES.join('|'),
                },
            },
        },
        state: {
            control: 'select',
            options: (['default']).concat(STATES),
            mapping: {
                Default: '',
            },
            description: 'State of text box',
            table: {
                type: {
                    summary: STATES.join('|'),
                },
            },
        },
        size: {
            control: {type: 'range', min: 1, max: 6, step: 1},
            description: 'Size of text box',
            table: {
                type: {
                    summary: 'number',
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
                    summary: 'InputHTMLAttributes<HTMLInputElement>',
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
    render: (args: any) => <TextBox fieldName="text" value="Text" {...args} />,
};

export const PlaceHolder = {
    ...Default,
    args: {
        value: '',
        placeholder: 'Place Holder',
    }
};
export const Primary = {
    ...Default,
    args: {
        colorType: 'primary',
    }
};
export const Link = {
    ...Default,
    args: {
        colorType: 'link',
    }
};
export const Info = {
    ...Default,
    args: {
        colorType: 'info',
    }
};
export const Success = {
    ...Default,
    args: {
        colorType: 'success',
    }
};
export const Warning = {
    ...Default,
    args: {
        colorType: 'warning',
    }
};
export const Danger = {
    ...Default,
    args: {
        colorType: 'danger',
    }
};
export const Hover = {
    ...Default,
    args: {
        state: 'hover',
    }
};
export const Focus = {
    ...Default,
    args: {
        state: 'focus',
    }
};
export const Loading = {
    ...Default,
    args: {
        state: 'loading',
    }
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
    }
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
    }
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
    }
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
    }
};
export const DefaultWithClasses = {
    ...Default,
    args: {
        classes: ['has-background-primary', 'p-1']
    }
};
export const PrimaryWithClasses = {
    ...Primary,
    args: {
        value: 'Color will be Info',
        colorType: 'primary',
        classes: ['is-info']
    },
};
export const WithAttribute = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Text Box',
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'text-box-with-id'], ['name', 'Text Box']
        ]),
    },
};
