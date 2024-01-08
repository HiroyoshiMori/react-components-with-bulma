import {Icons} from "../../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent} from "../../../../utils";

export default {
    title: 'React Component/Element/Icons',
    component: Icons,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Icons Element',
        docs: {
            description: {
                component: 'This component renders Icon.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/icon/',
            },
        },
    },
    argTypes: {
        icon: {
            control: 'object',
            description: 'Icon definition for FontAwesome',
            table: {
                type: {
                    summary: 'FontAwesomeIconProps',
                    detail: deIndent(`
                            'e.g., {
                                icon: icon({name: 'check', style: 'solid')})
                            }
                        `),
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for icon',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for icon',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLSpanElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for icon. "data-" will be added at the beginning of attributes.',
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
    },
};
/**
 * Default icon
 */
export const Default = {
    render: (args: any) => <Icons
        icon={{icon: icon({name: 'check', style: 'solid'})}}
        {...args}
    />,
};
/**
 * Icon with spin and rotate
 */
export const FontAwesomeSizeRotationSpin = {
    ...Default,
    args: {
        icon: {
            icon: icon({name: 'bank', style: 'solid'}),
            size: '2x',
            rotation: 90,
            spin: true,
        },
    },
};
/**
 * Icon with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: ['test-class'],
    },
};
/**
 * Icon with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Icon Label'},
    },
};
/**
 * Icon with Datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'icon-id'],
        ]),
    },
};