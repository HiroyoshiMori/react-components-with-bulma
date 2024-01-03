import React, {Fragment} from "react";
import {
    CommonDataSet,
    InputAttributes,
    InputClasses,
    InputDatasets,
    InputRadioProps,
    RadioClasses,
} from "../@types";
import {convertDataSet} from "../../utils";
import {RadioGroup} from "./radio_group";

export const InputRadioGroup = (itemProps: InputRadioProps) => {
    const {
        name,
        items,
        currentValue,
        onChange,
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
    (['control', 'label', 'input'] as Array<keyof (InputClasses & RadioClasses)>)
        .forEach((k: keyof (InputClasses & RadioClasses)) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'label': defaultValue = 'radio'; break;
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
                <RadioGroup
                    fieldName={name}
                    fields={items}
                    currentValue={currentValue}
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
