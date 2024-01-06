import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListHeaderProps,
    ListColumnFields,
    ListRowClasses, InputFileClasses,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {initialize} from "../../common";

export const ListHeader = (
    props: ListHeaderProps
) => {
    const {
        items,
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
                className={classes.wrap ? classes.wrap.join(' ') : ''}
                {...attributes}
                {...datasetShown}
            >
                {
                    items && items.map((header: ListColumnFields, idx: number) => {
                        header.attributes = header.attributes ?? {};
                        header.datasets = header.datasets ?? new Map();
                        const headerClasses: string[] = (classes.column) ?
                            classes.column.concat(header.classes ?? []) : (header.classes ?? []);
                        const itemDatasetShown = convertDataSet(header.datasets as CommonDataSet);
                        return (
                            <Fragment key={idx}>
                                <div
                                    className={headerClasses.join(' ')}
                                    {...header.attributes}
                                    {...itemDatasetShown}
                                >
                                    {header.value}
                                </div>
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    );
}