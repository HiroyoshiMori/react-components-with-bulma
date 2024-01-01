import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListColumnFields,
    ListDetailProps,
} from "../../../@types";
import {convertDataSet} from "../../../../utils";

export const ListDetailCustom = (
    props: ListDetailProps
) => {
    const {
        item,
        classes = [],
    } = props;

    // Set default values if not already set
    if (!classes.includes('column')) {
        classes.push('column');
    }
    // Convert to variable easy to handle in this component
    const customItems: {
        value: any;
        classes: string[];
        attributes: React.HTMLAttributes<HTMLDivElement>;
        datasets: any; }[] = [];
    item && item.map((v: ListColumnFields) => {
        v.datasets = v.datasets ?? new Map();
        const columnClasses: string[] = (classes) ?
            classes.concat(v.classes ?? []) : (v.classes ?? []);
        const datasetShown = convertDataSet(v.datasets as CommonDataSet);
        const column = {
            value: v.value,
            classes: columnClasses,
            attributes: v.attributes ?? {},
            datasets: datasetShown,
        };
        customItems.push(column);
    });

    return (
        <Fragment>
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
        </Fragment>
    )
};
