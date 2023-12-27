import React, {Fragment} from "react";
import {
    CommonDataSet,
    LabelProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Label = (props: LabelProps) => {
    const {
        label,
        htmlFor,
        classes = [],
        attributes = {},
        datasets = new Map(),
        children,
    } = {...props};

    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <label
                htmlFor={htmlFor}
                className={classes.join(' ')}
                {...attributes}
                {...dataShown}
            >
                {children ?? label}
            </label>
        </Fragment>
    )
}
