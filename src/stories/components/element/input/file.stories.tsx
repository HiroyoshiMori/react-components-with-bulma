import {InputFile} from "../../../../components/element/input/file";
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
                component: "This component shows select for form.<br>In Bulma doc: https://bulma.io/documentation/form/file/",
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'Field name',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        label: {
            control: 'text',
            description: 'Label',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID',
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
            description: 'Icon put left side of label',
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
            description: 'Placeholder for file name label',
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
            description: 'Put file name at left side',
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
            description: 'Color type',
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
            description: 'Font size',
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
            description: 'Style classes',
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
            description: 'Additional attributes',
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
            description: 'Dataset',
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
export const Default = {
    render: (args: any) => <InputFile
        type={'file'}
        name={'Input File'}
        label={'Choose a file...'}
        {...args}
    />,
};
export const WithFileName = {
    ...Default,
    args: {
        fileNameLabel: 'File name is here.',
    },
};
export const WithIcon = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
    },
};
export const IsBoxed = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'upload'}),
        },
        isBoxed: true,
    },
};
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
export const WithFileNameLeft = {
    ...Default,
    args: {
        fileNameLabel: 'File name is here.',
        fileNamePositionLeft: true,
    },
};
export const WithFileNameExpanded = {
    ...Default,
    args: {
        fileNameLabel: 'File name is here.',
        fileNameExpanded: true,
    },
};
export const ColorPrimary = {
    ...Default,
    args: {
        colorType: 'primary',
    },
};
export const SizeLarge = {
    ...Default,
    args: {
        size: 'large',
    },
};
export const Alignment = {
    ...Default,
    args: {

    },
};
export const WithCLasses = {
    ...Default,
    args: {
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
