import React, {Fragment} from "react";
import {
    CheckboxClasses,
    CommonDataSet, FormInputFileAttributes, FormInputFileClasses, FormInputFileDatasets, InputAttributes,
    InputCheckboxProps, InputClasses, InputDatasets,
} from "../@types";
import {convertDataSet} from "../../utils";
import {CheckboxGroup} from "./checkbox_group";
import {initialize, initializeDatasets} from "../common";

export const InputCheckboxGroup = (itemProps: InputCheckboxProps) => {
    const {
        name,
        items,
        onChange,
        currentValues = [],
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

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        itemProps['classes'] as InputClasses & CheckboxClasses, [
            'control', 'label', 'input'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'label': defaultValue = 'checkbox'; break;
            }
            return defaultValue;
        }
    );

    return (
        <Fragment>
            <div
                className={classes.control?.join(' ')}
                {...attributes.control}
                {...datasetShown.control}
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
