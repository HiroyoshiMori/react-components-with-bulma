import React, {Fragment} from "react";
import {
    CommonDataSet,
    CheckboxProps,
    CheckboxAttributes,
    CheckboxClasses,
    CheckboxDatasets,
} from "../../@types";
import {Label} from "../label";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Checkbox = (props: CheckboxProps) => {
    const {
        field,
        currentValues= [],
        onChange,
        prefix = '',
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['label', 'input'] as Array<keyof CheckboxAttributes>)
        .forEach((k: keyof CheckboxAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['label', 'input'] as Array<keyof CheckboxDatasets>)
        .forEach((k: keyof CheckboxDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['label', 'input'] as Array<keyof CheckboxClasses>)
        .forEach((k: keyof CheckboxClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    // Set default values if not already set
    if (classes.label && !classes.label.includes('checkbox')) {
        classes.label.push('checkbox');
    }
    if (classes.input) {
        if (ArrayRegexIncludes(classes.input, /^mr?-([0-6]|auto)$/) === -1) {
            classes.input.push('mr-1');
        }
    }

    const datasetShown = convertDataSet(datasets.input as CommonDataSet);

    return (
        <Fragment>
            <Label
                classes={classes.label}
                htmlFor={(prefix ? (prefix + '-') : '') + field.key}
                attributes={attributes?.label}
                datasets={datasets.label}
            >
                <input
                    type="checkbox"
                    name={field.name}
                    id={(prefix ? (prefix + '-') : '') + field.key}
                    value={field.value ?? field.key}
                    className={classes.input?.join(' ')}
                    onChange={onChange}
                    checked={currentValues.includes(field.value ?? field.key) || currentValues.includes(field.key)}
                    disabled={field.disabled ?? false}
                    {...attributes?.input}
                    {...datasetShown}
                />
                <span>{field.label ?? (field.value ?? field.key)}</span>
            </Label>
        </Fragment>
    );
}
