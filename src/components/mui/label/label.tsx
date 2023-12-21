import React, {Fragment, ReactNode} from "react";
import {CommonDataSet, LabelFields} from "../../@types";
import {convertDataSet} from "../../../utils";

type LabelProps =
    LabelFields & Partial<{children: ReactNode}> |
    Partial<LabelFields> & {children: ReactNode};

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
