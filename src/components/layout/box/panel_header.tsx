import React, {Fragment} from "react";
import {PanelHeaderProps} from "../../@types/panel";
import {convertDataSet} from "../../../utils";

export const PanelHeader = (props: PanelHeaderProps) => {
    const {
        children,
        tag = 'p',
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Set default value if not already set
    if (!classes.includes('panel-heading')) {
        classes.push('panel-heading');
    }
    const datasetShown = convertDataSet(datasets);

    let Tag: React.ElementType;
    switch (tag) {
        case 'div': Tag = 'div'; break;
        default:
            Tag = 'p';
    }

    return (
        <Fragment>
            <Tag
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
};
