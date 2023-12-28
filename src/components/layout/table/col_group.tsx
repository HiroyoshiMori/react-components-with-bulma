import React, {Fragment} from "react";
import {ColGroupCLasses, ColGroupProps, ColProps} from "../../@types";
import {convertDataSet} from "../../../utils";

export const ColGroup = (props: ColGroupProps) => {
    const {
        cols,
        span,
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = props;

    (['group', 'col'] as Array<keyof ColGroupCLasses>)
        .forEach((k: keyof ColGroupCLasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });

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