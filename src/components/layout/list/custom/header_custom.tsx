import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListHeaderProps,
    ListColumnFields,
    ListRowClasses,
} from "../../../@types";
import {convertDataSet} from "../../../../utils";
import {initialize} from "../../../common";

export const ListHeaderCustomWith5Items = (
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

    // Convert to variable easy to handle in this component
    const customItems: {
        value: any;
        classes: string[];
        attributes: React.HTMLAttributes<HTMLDivElement>;
        datasets: any;
    }[] = [];
    items && items.map((header: ListColumnFields) => {
        header.datasets = header.datasets ?? new Map();
        const columnClasses: string[] = (classes.column) ?
            classes.column.concat(header.classes ?? []) : (header.classes ?? []);
        const itemDatasetShown = convertDataSet(header.datasets as CommonDataSet);
        const column = {
            value: header.value,
            classes: columnClasses,
            attributes: header.attributes ?? {},
            datasets: itemDatasetShown,
        };
        customItems.push(column);
    });

    return (
        <Fragment>
            <div
                className={classes.wrap ? classes.wrap.join(' ') : ''}
                {...attributes}
                {...datasetShown}
            >
                <div
                    className={customItems[0].classes.join(' ')}
                    {...customItems[0].attributes}
                    {...customItems[0].datasets}
                >
                    {customItems[0].value}
                </div>
                <div className="column">
                    <div className="columns">
                        <div
                            className={customItems[1].classes.join(' ')}
                            {...customItems[1].attributes}
                            {...customItems[1].datasets}
                        >
                            {customItems[1].value}
                        </div>
                        <div
                            className={customItems[2].classes.join(' ')}
                            {...customItems[2].attributes}
                            {...customItems[2].datasets}
                        >
                            {customItems[2].value}
                        </div>
                    </div>
                    <div className="columns">
                        <div
                            className={customItems[3].classes.join(' ')}
                            {...customItems[3].attributes}
                            {...customItems[3].datasets}
                        >
                            {customItems[3].value}
                        </div>
                        <div
                            className={customItems[4].classes.join(' ')}
                            {...customItems[4].attributes}
                            {...customItems[4].datasets}
                        >
                            {customItems[4].value}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}