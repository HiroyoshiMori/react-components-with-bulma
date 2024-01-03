import React, {Fragment} from "react";
import {
    TextareaProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Textarea = (props: TextareaProps) => {
    const {
        name,
        id,
        children,
        cols = 20,
        rows = 2,
        placeholder,
        maxLength,
        minLength,
        wrap,
        required = false,
        disabled = false,
        readOnly = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <textarea
                name={name}
                id={id}
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                wrap={wrap}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </textarea>
        </Fragment>
    )
};
