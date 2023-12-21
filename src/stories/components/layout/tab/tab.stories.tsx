import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Tab} from "../../../../components";
import {TabsItemFields} from "../../../../components";

export default {
    component: Tab,
    tags: ['autodocs'],
}
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
export const Icons = {
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
