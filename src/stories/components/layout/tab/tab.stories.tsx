import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {HORIZONTAL_POSITIONS, Tab} from "../../../../components";
import {TabsItemFields} from "../../../../components";
import {deIndent} from '../../../../utils';

export default {
    title: 'React Component/Layout/Tab',
    component: Tab,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Tabs - Navigation',
        docs: {
            description: {
                component: 'This component renders tabs.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/components/tabs/',
            },
        },
    },
    argTypes: {
        items: {
            control: 'object',
            description: 'Items in tab',
            table: {
                type: {
                    summary: 'TabItemFields[]',
                    detail: deIndent(`
                            {
                                label: ReactNode,
                                isActive?: boolean,
                                href?: string,
                                attributes?: HTMLAttributes<HTMLLIElement>,
                                datasets?: Map<string, string>,
                            }
                        `),
                },
            },
        },
        position: {
            control: 'radio',
            description: 'Tab position',
            table: {
                type: {
                    summary: HORIZONTAL_POSITIONS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for tab',
            table: {
                type: {
                    summary: 'TabsClasses',
                    detail: deIndent(`
                            {
                                wrap?: string[],
                                item?: string[],
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
            description: 'Additional attributes for tab',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
                    detail: deIndent(`
                            e.g.,
                            {'aria-label': 'LABEL'}
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets for tab. "data-" will be added at the beginning of attributes.',
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
/**
 * Default tab
 */
export const Default = {
    render: (args: any) => <Tab
        items={[
            {label: "Tab1"} as TabsItemFields,
            {label: "Tab2", isActive: true} as TabsItemFields,
            {label: "Tab3"} as TabsItemFields,
            {label: "Tab4"} as TabsItemFields,
            {label: "Tab5"} as TabsItemFields,
        ]}
        {...args}
    />,
};
/**
 * Tab positioned left
 */
export const PositionLeft = {
    ...Default,
    args: {
        position: 'left',
    },
};
/**
 * Tab positioned right
 */
export const PositionRight = {
    ...Default,
    args: {
        position: 'right',
    },
};
/**
 * Tab with icons
 */
export const WithIcons = {
    ...Default,
    args: {
        items: [
            {
                label: (
                    <Fragment>
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'image'})}/></span>
                        <span>Image</span>
                    </Fragment>
                ),
            } as TabsItemFields,
            {
                label: (
                    <Fragment>
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'check'})}/></span>
                        <span>Check</span>
                    </Fragment>
                ),
            } as TabsItemFields,
            {
                label: (
                    <Fragment>
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'save'})}/></span>
                        <span>Save</span>
                    </Fragment>
                ),
            } as TabsItemFields,
            {
                label: (
                    <Fragment>
                        <span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'search'})}/></span>
                        <span>Search</span>
                    </Fragment>
                ),
            } as TabsItemFields,
        ],
    },
};
/**
 * Tab with style classes
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
 * Tab with additional attributes
 */
export const WithAttributes = {
    ...Default,
    args: {
        items: [
            {
                label: "Tab1",
                attributes: {'aria-label': 'tab1'},
            },
            {
                label: "Tab2",
                isActive: true,
                attributes: {'aria-label': 'tab2'},
            },
            {
                label: "Tab3",
                attributes: {'aria-label': 'tab3'},
            },
            {
                label: "Tab4",
                attributes: {'aria-label': 'tab4'},
            },
        ],
        attributes: {
            'aria-label': 'Tabs',
        },
    },
};
/**
 * Tab with datasets
 */
export const WithDatasets = {
    ...Default,
    args: {
        items: [
            {
                label: "Tab1",
                datasets: new Map([
                    ['id', 'item-1'], ['name', 'Tab1']
                ]),
            },
            {
                label: "Tab2",
                isActive: true,
                datasets: new Map([
                    ['id', 'item-2'], ['name', 'Tab2']
                ]),
            },
            {
                label: "Tab3",
                datasets: new Map([
                    ['id', 'item-3'], ['name', 'Tab3']
                ]),
            },
            {
                label: "Tab4",
                datasets: new Map([
                    ['id', 'item-4'], ['name', 'Tab4']
                ]),
            },
        ],
        datasets: new Map([
            ['id', 'tabs'], ['name', 'Tabs']
        ]),
    },
};
