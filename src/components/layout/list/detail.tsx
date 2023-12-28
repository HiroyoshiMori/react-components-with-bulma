import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListColumnFields,
    ListDetailProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const ListDetail = (
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

    return (
        <Fragment>
            {
                item.length > 0 && item.map((v: ListColumnFields, idx: number) => {
                    v.attributes = v.attributes ?? {};
                    v.datasets = v.datasets ?? new Map();
                    const colClasses: string[] = v.classes ?
                        classes.concat(v.classes) : classes;
                    const dataShown = convertDataSet(v.datasets as CommonDataSet);
                    return (
                        <Fragment key={"list-detail-" + idx}>
                            <div
                                className={colClasses.join(' ')}
                                {...v.attributes}
                                {...dataShown}
                            >
                                {v.value}
                            </div>
                        </Fragment>
                    );
                })
            }
        </Fragment>
    )
};
