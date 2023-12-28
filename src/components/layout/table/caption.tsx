import React, {Fragment} from "react";
import {CaptionProps} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Caption = (props: CaptionProps) => {
    const {
        classes = [],
        attributes = {},
        datasets = new Map(),
        children,
    } = props;

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <caption
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </caption>
        </Fragment>
    );
};
