import {
    CardContentAttributes,
    CardContentClasses,
    CardContentDatasets,
    CardContentProps,
    CommonDataSet
} from "../../@types";
import {Fragment} from "react";
import {convertDataSet} from "../../../utils";

export const CardContent = (props: CardContentProps) => {
    const {
        classes = {},
        attributes = {},
        datasets = {},
        children,
    } = {...props};

    // Initialize if undefined
    (['wrap', 'content'] as Array<keyof CardContentAttributes>)
        .forEach((k: keyof CardContentAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'content'] as Array<keyof CardContentDatasets>)
        .forEach((k: keyof CardContentDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    // Initialize if undefined and set default values if not already set
    (['wrap', 'content'] as Array<keyof CardContentClasses>)
        .forEach((k: keyof CardContentClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let checkValue;
            switch (k) {
                case 'wrap': checkValue = 'card-content'; break;
                case 'content': checkValue = 'content'; break;
            }
            if (checkValue && !classes[k]?.includes(checkValue)) {
                classes[k]?.push(checkValue);
            }
        });

    // Set default values if not already set


    let datasetShown = {} as any;
    (['wrap', 'content'] as Array<keyof CardContentDatasets>)
        .forEach((k: keyof CardContentDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <div
                    className={classes.content?.join(' ')}
                    {...attributes.content}
                    {...datasetShown.content}
                >
                    {children}
                </div>
            </div>
        </Fragment>
    )
};
