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
                component: "This component put \"Icon\".<br>In Bulma doc: https://bulma.io/documentation/elements/icon/",
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
            description: 'Style classes',
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
            description: 'Style classes',
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
            description: 'datasets which start with data-.',
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
export const Default = {
    render: (args: any) => <Icons
        icon={{icon: icon({name: 'check', style: 'solid'})}}
        {...args}
    />,
};
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
