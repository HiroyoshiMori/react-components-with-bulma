import React, {Fragment} from "react";
import {
    InputAttributes,
    InputClasses,
    InputDatasets,
    InputRadioProps,
    RadioClasses,
} from "../@types";
import {RadioGroup} from "./radio_group";
import {initialize, initializeDatasets} from "../common";

export const InputRadioGroup = (itemProps: InputRadioProps) => {
    const {
        name,
        items,
        currentValue,
        onChange,
        prefix,
    } = itemProps;

    // Initialize if undefined
    const attributes = initialize(
        itemProps['attributes'] as InputAttributes, [
            'control'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        itemProps['datasets'] as InputDatasets, [
            'control'
        ], new Map()
    );
    const classes = initialize(
        itemProps['classes'] as InputClasses & RadioClasses, [
            'control', 'label', 'input'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'label': defaultValue = 'radio'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set

    return (
        <Fragment>
            <div
                className={classes.control?.join(' ')}
                {...attributes.control}
                {...datasetShown.control}
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
