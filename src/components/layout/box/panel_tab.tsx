import React, {Fragment} from "react";
import {PanelTabProps, PanelTabsProps} from "../../@types/panel";
import {convertDataSet} from "../../../utils";

export const PanelTabs = (props: PanelTabsProps) => {
    const {
        items,
        tag = 'p',
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // set default value if not set
    if (!classes.includes('panel-tabs')) {
        classes.push('panel-tabs');
    }

    let Tag: React.ElementType;
    switch (tag) {
        case 'div': Tag = 'div'; break;
        default:
            Tag = 'p';
    }

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    items && items.length > 0 && items.map((item: PanelTabProps, idx: number) => {
                        return (
                            <PanelTab
                                key={idx}
                                {...item}
                            >

                            </PanelTab>
                        );
                    })
                }
            </Tag>
        </Fragment>
    );
};

export const PanelTab = (props: PanelTabProps) => {
    const {
        href,
        onClick,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <a
                href={href}
                onClick={onClick}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </a>
        </Fragment>
    );
};
