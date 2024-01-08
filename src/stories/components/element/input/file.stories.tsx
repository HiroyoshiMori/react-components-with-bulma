import {InputFile} from "../../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {COLOR_TYPES, SIZES} from "../../../../components";
import {deIndent} from "../../../../utils";

export default {
    title: 'React Component/Element/InputFile',
    component: InputFile,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Input File Element',
        docs: {
            description: {
                component: 'This component shows select for form.<br>'
                        + 'In Bulma doc: https://bulma.io/documentation/form/file/',
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Element name',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        buttonLabel: {
            control: 'text',
            description: 'Button label',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        id: {
            control: 'text',
            description: 'Element ID',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        icon: {
            control: 'object',
            description: 'Icon which is rendered at left side of label',
            table: {
                type: {
                    summary: 'FontAwesomeIconProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isBoxed: {
            control: 'boolean',
            description: 'Use boxed shape',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        fileNameLabel: {
            control: 'text',
            description: 'Placeholder of label for file name',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        fileNamePositionLeft: {
            control: 'boolean',
            description: 'Put file name at left side, but it seems wrong behavior in Bulma',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        fileNameExpanded: {
            control: 'boolean',
            description: 'Expand file name label',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        colorType: {
            control: 'select',
            options: ['default'].concat(COLOR_TYPES),
            mapping: {
                Default: '',
            },
            description: 'Color type of element',
            table: {
                type: {
                    summary: COLOR_TYPES.join(' '),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: 'select',
            options: ['default'].concat(SIZES),
            mapping: {
                Default: '',
            },
            description: 'Size of element',
            table: {
                type: {
                    summary: SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        alignment: {
            control: 'select',
            options: ['left', 'right'],
            description: 'Position alignment',
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
            description: 'Style classes for input[type=file]',
            table: {
                type: {
                    summary: 'InputFileClasses',
                    detail: deIndent(`
                            {
                                div?: string[],
                                label?: string[],
                                input?: string[],
                                cta?: string[],
                                icon?: string[],
                                labelSpan?: string[],
                                fileNameLabel?: string[],
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for input[type=file]',
            table: {
                type: {
                    summary: 'InputFileAttributes',
                    detail: deIndent(`
                            {
                                div?: HTMLAttributes<HTMLDivElement>,
                                label?: LabelHTMLAttributes<HTMLLabelElement>,
                                input?: InputHTMLAttributes<HTMLInputElement>,
                                cta?: HTMLAttributes<HTMLSpanElement>,
                                icon?: HTMLAttributes<HTMLSpanElement>,
                                labelSpan?: HTMLAttributes<HTMLSpanElement>,
                                fileNameLabel?: HTMLAttributes<HTMLSpanElement>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Dataset for file upload. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'InputFileDatasets',
                    detail: deIndent(`
                            {
                                div?: Map<string, string>,
                                label?: Map<string, string>,
                                input?: Map<string, string>,
                                cta?: Map<string, string>;
                                icon?: Map<string, string>,
                                labelSpan?: Map<string, string>,
                                fileNameLabel?: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
    },
};
/**
 * Default file upload input
 */
export const Default = {
    render: (args: any) => <InputFile
        type={'file'}
        name={'Input File'}
        buttonLabel={'Choose a file...'}
        {...args}
    />,
};
/**
 * File upload input with file name placeholder
 */
export const WithFileName = {
    ...Default,
    args: {
        fileNameLabel: 'File name is here.',
    },
};
/**
 * File upload input with Icon
 */
export const WithIcon = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
    },
};
/**
 * File upload input with boxed shape
 */
export const IsBoxed = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
        isBoxed: true,
    },
};
/**
 * File upload input with file name in boxed shape
 */
export const IsBoxedWithFileName = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
        isBoxed: true,
        fileNameLabel: 'File name is here.',
    },
};
/**
 * File upload input with file name which is placed at left.<br />
 * Due to Bulma restriction, element will be rendered at flex-end
 */
export const WithFileNameLeft = {
    ...Default,
    args: {
        fileNameLabel: 'File name is here.',
        fileNamePositionLeft: true,
    },
};
/**
 * File upload input with expanded file name label
 */
export const WithFileNameExpanded = {
    ...Default,
    args: {
        fileNameLabel: 'File name is here.',
        fileNameExpanded: true,
    },
};
/**
 * File upload input with color type
 */
export const WithColorType = {
    ...Default,
    args: {
        colorType: 'primary',
    },
};
/**
 * File upload input with size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'large',
    },
};
/**
 * File upload input with alignment
 */
export const WithAlignment = {
    ...Default,
    args: {
        alignment: 'left',
    },
};
/**
 * File upload input with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
        fileNameLabel: 'file name...',
        classes: {
            div: ['test-div'],
            label: ['test-label'],
            input: ['test-input'],
            cta: ['test-cta'],
            icon: ['test-icon'],
            labelSpan: ['test-labelSpan'],
            fileNameLabel: ['test-fileNameLabel'],
        },
    },
};
/**
 * File upload input with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
        fileNameLabel: 'file name...',
        attributes: {
            div: {'aria-label': 'file-div'},
            label: {'aria-label': 'file-label'},
            input: {'aria-label': 'file-input'},
            cta: {'aria-label': 'file-cta'},
            icon: {'aria-label': 'file-icon'},
            labelSpan: {'aria-label': 'file-span'},
            fileNameLabel: {'aria-label': 'file-filename'},
        },
    },
};
/**
 * File upload input with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
        fileNameLabel: 'file name...',
        datasets: {
            div: new Map([['id', 'div-id']]),
            label: new Map([['id', 'label-id']]),
            input: new Map([['id', 'input-id']]),
            cta: new Map([['id', 'cta-id']]),
            icon: new Map([['id', 'icon-id']]),
            labelSpan: new Map([['id', 'span-id']]),
            fileNameLabel: new Map([['id', 'filename-id']]),
        },
    },
};
