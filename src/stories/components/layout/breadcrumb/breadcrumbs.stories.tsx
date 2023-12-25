import React, {HTMLAttributes} from "react";
import {BreadcrumbItemFields, Breadcrumbs, HORIZONTAL_POSITIONS, SEPARATORS, SIZES} from "../../../../components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default {
    title: 'React Component/Layout/Breadcrumb',
    component: Breadcrumbs,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Breadcrumb to improve navigation experience',
        docs: {
            description: {
                component: 'This component shows breadcumbs to let users know where they are now.<br>'
                    + 'See: https://en.wikipedia.org/wiki/Breadcrumb_navigation<br>'
                    + 'In Bulma doc: https://bulma.io/documentation/components/breadcrumb/',
            },
        },
    },
    argTypes: {
        items: {
            control: 'object',
            description: "Items for breadcrumb",
            table: {
                type: {
                    summary: 'BreadcrumbItemFields[]',
                    detail: '{\n'
                        + '  label: ReactNode,\n'
                        + '  isActive?: boolean,\n'
                        + '  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,\n'
                        + '  attributes?: HTMLAttributes<HTMLLIElement>,\n'
                        + '  datasets?: Map<string, string>,\n'
                        + '}[]',
                },
                defaultValue: {
                    summary: '[]',
                },
            },
        },
        position: {
            control: 'select',
            options: (['left']).concat(HORIZONTAL_POSITIONS),
            mapping: {
                Left: "",
            },
            description: 'Where to show breadcrumb',
            table: {
                type: {
                    summary: HORIZONTAL_POSITIONS.join('|'),
                },
            },
        },
        separator: {
            control: 'select',
            options: (['default']).concat(SEPARATORS),
            mapping: {
                Default: "",
            },
            description: 'Separator which is placed between each item',
            table: {
                type: {
                    summary: SEPARATORS.join('|'),
                },
            },
        },
        size: {
            control: 'select',
            options: (['default']).concat(SIZES),
            mapping: {
                Default: "",
            },
            description: 'Size of breadcrumb',
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
                    summary: '[]',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'attributes to add extra. ',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
    render: (args: any) => <Breadcrumbs
        items={[
            {label: 'AAA'},
            {label: 'BBB'},
            {label: 'CCC'},
            {label: 'DDD'},
            {label: 'EEE'},
            {label: 'FFF'},
        ]}
        {...args}
    />,
};
export const Left = {
    ...Default,
    args: {
        position: 'left',
    },
};
export const Right = {
    ...Default,
    args: {
        position: 'right',
    },
};
export const Arrow = {
    ...Default,
    args: {
        separator: 'arrow',
    },
};
export const Bullet = {
    ...Default,
    args: {
        separator: 'bullet',
    },
};
export const Dot = {
    ...Default,
    args: {
        separator: 'dot',
    },
};
export const Succeeds = {
    ...Default,
    args: {
        separator: 'succeeds',
    },
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
    },
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
    },
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
    },
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
    },
};
export const WithIcons = {
    ...Default,
    args: {
        items: [
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'home'})}/></span><span>Home</span></a>},
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'book'})}/></span><span>Book</span></a>},
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'puzzle-piece'})}/></span><span>Components</span></a>},
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'file'})}/></span><span>Breadcrumb</span></a>},
        ]
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        items: [
            {label: 'AAA', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'BBB', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'CCC', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'DDD', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'EEE', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'FFF', attributes: {'aria-label': 'Breadcrumb item'}},
        ],
        attributes: {
            'aria-label': 'Breadcrumbs',
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        items: [
            {label: 'AAA', datasets: new Map([
                ['id', 'data-id1'], ['name', 'data-name1'],
            ])},
            {label: 'BBB', datasets: new Map([
                    ['id', 'data-id2'], ['name', 'data-name2'],
                ])},
            {label: 'CCC', datasets: new Map([
                    ['id', 'data-id3'], ['name', 'data-name3'],
                ])},
            {label: 'DDD', datasets: new Map([
                    ['id', 'data-id4'], ['name', 'data-name4'],
                ])},
        ],
        datasets: new Map([
            ['id', 'data-id'], ['name', 'data-name'],
        ]),
    },
};
