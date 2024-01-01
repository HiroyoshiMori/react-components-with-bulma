import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListHeaderProps,
    ListColumnFields,
    ListRowClasses,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const ListHeader = (
    props: ListHeaderProps
) => {
    const {
        items,
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    (['wrap', 'column'] as Array<keyof ListRowClasses>)
        .forEach((k: keyof ListRowClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    // Set default values if not already set
    if (classes.wrap && !classes.wrap.includes('columns')) {
        classes.wrap.push('columns');
    }
    if (classes.column && !classes.column.includes('column')) {
        classes.column.push('column');
    }
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