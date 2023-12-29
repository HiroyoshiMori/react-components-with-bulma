import {Card} from "../../../../components/layout/card";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Card Box',
        docs: {
            description: {
                component: "This component shows composable card box.<br>In Bulma doc: https://bulma.io/documentation/components/card/",
            },
        },
    },
    argTypes: {
        header: {
            control: 'object',
            description: 'Card header information',
            table: {
                type: {
                    summary: 'CardHeaderProps',
                    detail: deIndent(`
                            {
                                title: ReactNode,
                                buttonIcon?: FontAwesomeIconProps,
                                onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
                                classes?: {
                                    wrap?: string[], title?: string[], button?: string[],
                                    span?: string[], icon?: string[],
                                },
                                attributes: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    title?: HTMLAttributes<HTMLParagraphElement>,
                                    button?: ButtonHTMLAttributes<HTMLButtonElement>,
                                    span?: HTMLAttributes<HTMLSpanElement>,
                                    icon?: HTMLAttributes<HTMLElement>,
                                },
                                datasets: {
                                    wrap?: Map<string, string>,
                                    title?: Map<string, string>,
                                    button?: Map<string, string>,
                                    span?: Map<string, string>,
                                    icon?: Map<string, string>,
                                },
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        image: {
            control: 'object',
            description: 'Card image information',
            table: {
                type: {
                    summary: 'CardImageProps',
                    detail: deIndent(`
                            {
                                src: string,
                                alt?: string,
                                classes?: {
                                    wrap?: string[],
                                    figure?: string[],
                                    image?: string[],
                                },
                                attributes?: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    figure?: HTMLAttributes<HTMLElement>,
                                    image?: HTMLAttributes<HTMLImageElement>,
                                },
                                datasets?: {
                                    wrap?: Map<string, string>,
                                    figure?: Map<string, string>,
                                    image?: Map<string, string>,
                                },
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        content: {
            control: 'object',
            description: 'Card content information',
            table: {
                type: {
                    summary: 'CardContentProps',
                    detail: deIndent(`
                            {
                                children?: ReactNode,
                                classes?: {
                                    wrap?: string[],
                                    content?: string[],
                                },
                                attributes?: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    content?: HTMLAttributes<HTMLDivElement>,
                                },
                                datasets?: {
                                    wrap?: Map<string, string>,
                                    content?: Map<string, string>,
                                }
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        footer: {
            control: 'object',
            description: 'Card footer information',
            table: {
                type: {
                    summary: 'CardFooterProps',
                    detail: deIndent(`
                            {
                                items: ReactNode[],
                                classes?: string[],
                                attributes?: {
                                    wrap?: HTMLAttributes<HTMLDivElement>,
                                    content?: HTMLAttributes<HTMLDivElement>,
                                },
                                datasets?: {
                                    wrap?: Map<string, string>,
                                    content?: Map<string, string>,
                                },
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for card',
            table: {
                type: {
                    summary: "string[]",
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets',
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
                    summary: 'new Map()',
                },
            },
        },
    },
};
export const Default = {
    render: (args: any) => <Card
        header={{
            title: "Card Header",
            buttonIcon: {
                icon: icon({name: 'angle-down', style: 'solid'}),
            },
        }}
        content={{
            children: "Card Content"
        }}
        footer={{
            items: [
                "Card Footer Item 1",
                "Card Footer Item 2",
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
        }}
        {...args}
    />,
};
export const ClassesInFooter = {
    ...Default,
    args: {
        footer: {
            items: [
                "Card Footer Item 1",
                (<a href="#" className="is-active">Card Footer Item 2 w/class</a>),
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
        },
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        header: {
            title: "Card Header",
            buttonIcon: {
                icon: icon({name: 'angle-down', style: 'solid'}),
            },
            classes: {
                wrap: ['card-header-wrap'],
                title: ['card-header-title'],
                button: ['card-header-button'],
                span: ['card-header-span'],
            },
            attributes: {
                wrap: {'aria-label': 'card-header-wrap'},
                title: {'aria-label': 'card-header-title'},
                button: {'aria-label': 'card-header-button'},
                span: {'aria-label': 'card-header-span'},
            },
        },
        content: {
            children: "Card Content",
            classes: {
                wrap: ['card-content-wrap'],
                content: ['card-content-content'],
            },
            attributes: {
                wrap: {'aria-label': 'card-content-wrap'},
                content: {'aria-label': 'card-content-content'},
            },
        },
        footer: {
            items: [
                "Card Footer Item 1",
                "Card Footer Item 2",
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
            classes: ['card-footer1'],
            attributes: {'aria-label': 'card-footer'},
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'card'], ['name', 'Card']
        ]),
        header: {
            title: "Card Header",
            buttonIcon: {
                icon: icon({name: 'angle-down', style: 'solid'}),
            },
            datasets: {
                wrap: new Map([
                    ['id', 'card-header-wrap'], ['name', 'Card Header Wrap']
                ]),
                title: new Map([
                    ['id', 'card-header-title'], ['name', 'Card Header Title']
                ]),
                button: new Map([
                    ['id', 'card-header-button'], ['name', 'Card Header Button']
                ]),
                span: new Map([
                    ['id', 'card-header-span'], ['name', 'Card Header Span']
                ]),
                icon: new Map([
                    ['id', 'card-header-icon'], ['name', 'Card Header Icon']
                ]),
            },
        },
        content: {
            children: "Card Content",
            datasets: {
                wrap: new Map([
                    ['id', 'card-content-wrap'], ['name', 'Card Content Wrap']
                ]),
                content: new Map([
                    ['id', 'card-content-content'], ['name', 'Card Content Content']
                ]),
            },
        },
        footer: {
            items: [
                "Card Footer Item 1",
                "Card Footer Item 2",
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
            datasets: new Map([
                ['id', 'card-footer'], ['name', 'Card Footer']
            ]),
        },
    },
};
