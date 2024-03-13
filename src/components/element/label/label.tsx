import {Fragment} from "react";
import {
    CommonDataSet,
    LabelProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Label = (props: LabelProps) => {
    const {
        label,
        htmlFor,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <label
                htmlFor={htmlFor}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children ?? label}
            </label>
        </Fragment>
    )
}
