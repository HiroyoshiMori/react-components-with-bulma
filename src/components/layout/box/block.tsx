import {Fragment} from "react";
import {BlockProps} from "../../@types/block";
import {convertDataSet} from "../../../utils";

export const Block = (props: BlockProps) => {
    const {
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Set default value if not already set
    if (!classes.includes('block')) {
        classes.push('block');
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
