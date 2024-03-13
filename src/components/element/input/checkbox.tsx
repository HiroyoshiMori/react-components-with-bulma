import {Fragment} from "react";
import {
    CheckboxProps,
    CheckboxAttributes,
    CheckboxClasses,
    CheckboxDatasets,
} from "../../@types";
import {Label} from "../label";
import {ArrayRegexIncludes, generateId} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Checkbox = (props: CheckboxProps) => {
    const {
        name,
        id = generateId(),
        value,
        label,
        disabled = false,
        currentValues= [],
        onChange,
        prefix = '',
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as CheckboxAttributes, [
            'label', 'input'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as CheckboxDatasets, [
            'label', 'input'
        ], new Map()
    );
    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as CheckboxClasses, [
            'label', 'input'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'label': defaultValue = 'checkbox'; break;
            }
            return defaultValue;
        }
    );

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
                    type="checkbox"
                    name={name}
                    id={(prefix ? (prefix + '-') : '') + id}
                    value={value ?? id}
                    className={classes.input?.join(' ')}
                    onChange={onChange}
                    checked={currentValues.includes(value ?? id) || currentValues.includes(id)}
                    disabled={disabled}
                    {...attributes?.input}
                    {...datasetShown.input}
                />
                <span>{label ?? (value ?? id)}</span>
            </Label>
        </Fragment>
    );
}
