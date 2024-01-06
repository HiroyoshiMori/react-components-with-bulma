import React, {Fragment} from "react";
import {
    ColGroupCLasses,
    ColGroupProps,
    ColProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {initialize} from "../../common";

export const ColGroup = (props: ColGroupProps) => {
    const {
        cols,
        span,
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    const classes = initialize(
        props['classes'] as ColGroupCLasses, [
            'group', 'col'
        ], []
    );
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <colgroup
                span={span}
                className={classes.group?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    cols && cols.length > 0 && cols.map((col: ColProps, idx: number) => {
                        col.attributes = col.attributes ?? {};
                        col.datasets = col.datasets ?? new Map();
                        const itemClasses = (classes.col) ?
                            classes.col.concat(col.classes ?? []) : (col.classes ?? []);
                        const datasetShown = convertDataSet(col.datasets);
                        return (
                            <Fragment>
                                <col
                                    key={"col_" + idx}
                                    span={col.span}
                                    className={itemClasses.join(' ')}
                                    {...col.attributes}
                                    {...datasetShown}
                                />
                            </Fragment>
                        )
                    })
                }
            </colgroup>
        </Fragment>
    )
}