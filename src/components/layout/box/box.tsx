import React, {Fragment} from "react";
import {BoxProps} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Box = (props: BoxProps) => {
    const {
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Set default values if not already set.
    if (!classes.includes('box')) {
        classes.push('box');
    }

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <div
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </div>
        </Fragment>
    );
};
