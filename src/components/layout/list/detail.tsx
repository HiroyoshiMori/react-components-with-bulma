import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListColumnFields,
    ListDetailProps, ListRowClasses,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {initialize} from "../../common";

export const ListDetail = (
    props: ListDetailProps
) => {
    const {
        item,
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as ListRowClasses, [
            'wrap', 'column'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'columns'; break;
                case 'column': defaultValue = 'column'; break;
            }
            return defaultValue;
        }
    );
    // Set default values if not already set
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    item.length > 0 && item.map((v: ListColumnFields, idx: number) => {
                        v.attributes = v.attributes ?? {};
                        v.datasets = v.datasets ?? new Map();
                        const colClasses: string[] = classes.column ?
                            classes.column.concat(v.classes ?? []) : (v.classes ?? []);
                        const itemDatasetShown = convertDataSet(v.datasets as CommonDataSet);
                        return (
                            <Fragment key={"list-detail-" + idx}>
                                <div
                                    className={colClasses.join(' ')}
                                    {...v.attributes}
                                    {...itemDatasetShown}
                                >
                                    {v.value}
                                </div>
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
)
};
