import React, {Fragment} from "react";
import {
    CheckboxClasses,
    CommonDataSet, InputAttributes,
    InputCheckboxProps, InputClasses, InputDatasets,
} from "../@types";
import {convertDataSet} from "../../utils";
import {CheckboxGroup} from "./checkbox_group";

export const InputCheckboxGroup = (itemProps: InputCheckboxProps) => {
    const {
        name,
        items,
        onChange,
        currentValues = [],
        prefix,
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
    (['control', 'label', 'input'] as Array<keyof (InputClasses & CheckboxClasses)>)
        .forEach((k: keyof (InputClasses & CheckboxClasses)) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'label': defaultValue = 'checkbox'; break;
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
                <CheckboxGroup
                    fieldName={name}
                    fields={items}
                    currentValues={currentValues}
                    onChange={onChange}
                    prefix={prefix}
                    classes={{
                        label: classes.label,
                        input: classes.input,
                    }}
                />
            </div>
        </Fragment>
    );
};
