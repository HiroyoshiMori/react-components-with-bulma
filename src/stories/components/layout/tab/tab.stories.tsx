import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Tab} from "../../../../components/layout/tab";
import {TabsItemFields} from "../../../../components/@types";

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
