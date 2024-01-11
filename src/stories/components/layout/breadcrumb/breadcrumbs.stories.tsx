import React from "react";
import {Breadcrumbs, HORIZONTAL_POSITIONS, SEPARATORS, SIZES} from "../../../../components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Breadcrumb',
    component: Breadcrumbs,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Breadcrumb to improve navigation experience',
        docs: {
            description: {
                component: 'This component renders breadcumbs to let users know where they are now.<br />'
                    + 'See: https://en.wikipedia.org/wiki/Breadcrumb_navigation<br />'
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
                    detail: deIndent(`
                            {
                                label: ReactNode,
                                isActive?: boolean,
                                onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
                                attributes?: HTMLAttributes<HTMLLIElement>,
                                datasets?: Map<string, string>,
                            }[]
                        `),
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
            description: 'Where breadcrumb rendered',
            table: {
                type: {
                    summary: HORIZONTAL_POSITIONS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
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
                defaultValue: {
                    summary: 'undefined',
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
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for breadcrumb',
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
            description: 'Additional attributes for breadcrumb',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
                    detail: deIndent(`
                            e.g., {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: "{}",
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for breadcrumb. "data-" will be added at the beginning of attributes.',
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
 * Default breadcrumb
 */
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
/**
 * Breadcrumb with position left
 */
export const WithPositionLeft = {
    ...Default,
    args: {
        position: 'left',
    },
};
/**
 * Breadcrumb with position right
 */
export const WithPositionRight = {
    ...Default,
    args: {
        position: 'right',
    },
};
/**
 * Breadcrumb with separator
 */
export const WithSeparator = {
    ...Default,
    args: {
        separator: 'arrow',
    },
};
/**
 * Breadcrumb with Size
 */
export const ElementSize = {
    ...Default,
    args: {
        size: 'small',
    },
};
/**
 * Breadcrumb with icon
 */
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
/**
 * Breadcrumb with style classes
 */
export const WithClasses = {
    ...Default,
    args: {
        classes: {
            wrap: ['test-wrap'],
            item: ['test-item'],
        },
    },
};
/**
 * Breadcrumb with additional attributes
 */
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
/**
 * Breadcrumb with datasets
 */
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
