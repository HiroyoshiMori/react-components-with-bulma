import React, {Fragment} from "react";
import {
    CommonDataSet,
    InputAttributes,
    InputButtonClasses,
    InputButtonProps,
    InputDatasets,
} from "../@types";
import {convertDataSet} from "../../utils";
import {Submit} from "../element/button/submit";

export const InputButton = (itemProps: InputButtonProps) => {
    const {
        name,
        id,
        additionalProps,
        onClick,
        prefix,
        disabled,
        classes = {},
        attributes = {},
        datasets = {},
    } = itemProps;

    // Initialize if undefined
    (['control'] as Array<keyof InputAttributes>)
        .forEach((k: keyof InputAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['control'] as Array<keyof InputDatasets>)
        .forEach((k: keyof InputDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['control', 'input'] as Array<keyof (InputButtonClasses)>)
        .forEach((k: keyof (InputButtonClasses)) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'input': defaultValue = 'button'; break;
            }
            if (defaultValue && !classes[k]?.includes(defaultValue)) {
                classes[k]?.push(defaultValue);
            }
        });

    // Set default values if not already set
    const datasetShown = convertDataSet(datasets.control as CommonDataSet);

    return (
        <Fragment>
            <div
                className={classes.control?.join(' ')}
                {...attributes.control}
                {...datasetShown}
            >
                <Submit
                    name={name}
                    id={id}
                    additionalProps={additionalProps}
                    onClick={onClick}
                    prefix={prefix}
                    disabled={disabled}
                    classes={classes.input}
                    attributes={attributes.input}
                    datasets={datasets.input}
                />
            </div>
        </Fragment>
    );
};
