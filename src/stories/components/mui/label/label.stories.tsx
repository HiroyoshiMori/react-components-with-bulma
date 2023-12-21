import React from 'react';
import { Label } from "../../../../components";
import {Fragment} from "react";

export default {
    component: Label,
    title: 'stories/components/mui/label/label',  // to gather in label instead of rooting
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Label label="Label" {...args} />,
}
export const HasChildren = {
    ...Default,
    args: {
        children: (
            <Fragment>
                <span>Child Element</span>
            </Fragment>
        )
    }
}
export const HasClassesBgPrimary = {
    ...Default,
    args: {
        label: 'Has Classes',
        classes: ['has-background-primary', 'p-1']
    }
}
export const HasChildrenClassesBgPrimary = {
    ...Default,
    args: {
        children: (
            <Fragment>
                <span>Child Element</span>
            </Fragment>
        ),
        classes: ['has-background-primary', 'p-1']
    }
}
export const HasLabelChildren = {
    ...Default,
    args: {
        label: 'Has Label/Children - Label',
        children: (
            <Fragment>
                <span>Has Label/ Children - Children</span>
            </Fragment>
        )
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {'aria-label': 'Label'},
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'label'], ['name', 'Label']
        ]),
    },
};
