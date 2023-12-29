import React, {Fragment} from "react";
import {
    CommonDataSet,
    RadioAttributes,
    RadioClasses,
    RadioDatasets,
    RadioProps,
} from "../../@types";
import {Label} from "../label";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Radio = (props: RadioProps) => {
    const {
        field,
        currentValue,
        onChange,
        prefix = '',
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'label', 'input'] as Array<keyof RadioAttributes>)
        .forEach((k: keyof RadioAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'label', 'input'] as Array<keyof RadioDatasets>)
        .forEach((k: keyof RadioDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['wrap', 'label', 'input'] as Array<keyof RadioClasses>)
        .forEach((k: keyof RadioClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    // Set default values if not already set
    if (classes.label && !classes.label.includes('radio')) {
        classes.label.push('radio');
    }
    if (classes.input) {
        if (ArrayRegexIncludes(classes.input, /^mr?-([0-6]|auto)$/) === -1) {
            classes.input.push('mr-1');
        }
    }

    let datasetShown = {} as any;
    (['wrap', 'input'] as Array<keyof RadioDatasets>)
        .forEach((k: keyof RadioDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

    return (
        <Fragment>
            <div
                key={(prefix ? (prefix + '-') : '') + field.key}
                className={classes.wrap?.join(' ')}
                {...attributes?.wrap}
                {...datasetShown.wrap}
            >
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
                        checked={currentValue === field.value}
                        disabled={field.disabled ?? false}
                        {...attributes?.input}
                        {...datasetShown.input}
                    />
                    <span>{field.label ?? (field.value ?? field.key)}</span>
                </Label>
            </div>
        </Fragment>
    );
}
