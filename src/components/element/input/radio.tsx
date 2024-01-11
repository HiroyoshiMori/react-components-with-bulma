import React, {Fragment} from "react";
import {
    RadioAttributes,
    RadioClasses,
    RadioDatasets,
    RadioProps,
} from "../../@types";
import {Label} from "../label";
import {ArrayRegexIncludes, generateId} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Radio = (props: RadioProps) => {
    const {
        name,
        id = generateId(),
        value,
        label,
        disabled = false,
        currentValue,
        onChange,
        prefix = '',
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as RadioAttributes, [
            'label', 'input'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as RadioDatasets, [
            'label', 'input'
        ], new Map()
    );
    const classes = initialize(
        props['classes'] as RadioClasses, [
            'label', 'input'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'label': defaultValue = 'radio'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (classes.input) {
        if (ArrayRegexIncludes(classes.input, /^mr?-([0-6]|auto)$/) === -1) {
            classes.input.push('mr-1');
        }
    }

    return (
        <Fragment>
            <Label
                classes={classes.label}
                htmlFor={(prefix ? (prefix + '-') : '') + id}
                attributes={attributes?.label}
                datasets={datasets.label}
            >
                <input
                    type="radio"
                    name={name}
                    id={(prefix ? (prefix + '-') : '') + id}
                    value={value ?? id}
                    className={classes.input?.join(' ')}
                    onChange={onChange}
                    checked={currentValue === (value ?? id) || currentValue === id}
                    disabled={disabled}
                    {...attributes?.input}
                    {...datasetShown.input}
                />
                <span>{label ?? (value ?? id)}</span>
            </Label>
        </Fragment>
    );
};
