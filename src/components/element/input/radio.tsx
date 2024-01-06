import React, {Fragment} from "react";
import {
    RadioAttributes,
    RadioClasses,
    RadioDatasets,
    RadioProps,
} from "../../@types";
import {Label} from "../label";
import {ArrayRegexIncludes} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Radio = (props: RadioProps) => {
    const {
        field,
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
                htmlFor={(prefix ? (prefix + '-') : '') + field.key}
                attributes={attributes?.label}
                datasets={datasets.label}
            >
                <input
                    type="radio"
                    name={field.name}
                    id={(prefix ? (prefix + '-') : '') + field.key}
                    value={field.value ?? field.key}
                    className={classes.input?.join(' ')}
                    onChange={onChange}
                    checked={currentValue === (field.value ?? field.key) || currentValue === field.key}
                    disabled={field.disabled ?? false}
                    {...attributes?.input}
                    {...datasetShown.input}
                />
                <span>{field.label ?? (field.value ?? field.key)}</span>
            </Label>
        </Fragment>
    );
}
