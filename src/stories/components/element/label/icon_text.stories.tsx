import {IconText} from "../../../../components";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent} from "../../../../utils";

export default {
    title: 'React Component/Element/Icons/IconText',
    component: IconText,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Icon and Text Group Element',
        docs: {
            description: {
                component: "This component put \"Icon and Text\" group.<br>In Bulma doc: https://bulma.io/documentation/elements/icon/",
            },
        },
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Items in IconText group',
            table: {
                type: {
                    summary: '(IconProps | ReactNode)[]',
                    detail: deIndent(`
                            ({
                                icon: FontAwesomeIconProps,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLSpanElement>,
                                datasets?: Map<string, string>,
                            } | ReactNode)[]
                        `)
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
    }
};
export const Default = {
    render: (args: any) => <IconText
        items={[
            {icon: {icon: icon({name: 'train'})}},
            'Tokyo',
            {icon: {icon: icon({name: 'arrow-right'})}},
            'Nagoya',
            {icon: {icon: icon({name: 'arrow-right'})}},
            'Kyoto',
            {icon: {icon: icon({name: 'flag-checkered'})}},
        ]}
        {...args}
    />,
};
