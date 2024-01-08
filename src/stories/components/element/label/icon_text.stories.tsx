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
                component: 'This component renders set of icon and label group.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/icon/',
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
            description: 'Style classes for icon text',
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
            description: 'Additional attributes for icon text',
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
            description: 'Datasets for icon text. "data-" will be added at the beginning of attributes.',
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
 * Default icon text group
 */
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
/**
 * icon text group with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: ['test-class'],
    },
};
/**
 * icon text group with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Icon Text Group'},
    },
};
/**
 * icon text group with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'icon-text-id'],
        ]),
    },
};
