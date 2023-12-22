import React, {Fragment} from "react";
import {
    CommonDataSet,
    RadioAttributes,
    RadioClasses,
    RadioDatasets,
    RadioGroupClasses,
    RadioGroupFields,
    RadioGroupProps
} from "../../@types";
import {Radio} from "./radio";
import {convertDataSet} from "../../../utils";

export const RadioGroup = (props: RadioGroupProps) => {
    const {
        fieldName,
        fields,
        currentValue,
        onChange,
        prefix = '',
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = {...props};

    // Initialize if undefined
    (['group', 'radio'] as Array<keyof RadioGroupClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    (['wrap', 'label', 'input'] as Array<keyof RadioClasses>).forEach((k) => {
        if (classes.radio && classes.radio[k] === undefined) {
            classes.radio[k] = [];
        }
    });
    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <div
                className={classes.group?.join(' ')}
                {...attributes}
                {...dataShown}
            >
                {
                    fields.map((v: RadioGroupFields) => {
                        // Initialize if undefined
                        v.attributes = v.attributes ?? {};
                        v.datasets = v.datasets ?? {};
                        (['wrap', 'label', 'input'] as Array<keyof RadioAttributes>)
                            .forEach((k: keyof RadioAttributes) => {
                                if (v.attributes && v.attributes[k] === undefined) {
                                    v.attributes[k] = {};
                                }
                            });
                        (['wrap', 'label', 'input'] as Array<keyof RadioDatasets>)
                            .forEach((k: keyof RadioDatasets) => {
                                if (v.datasets && v.datasets[k] === undefined) {
                                    v.datasets[k] = new Map();
                                }
                            });
                        return (
                            <Fragment key={(prefix ? (prefix + '-') : '') + v.key}>
                                <Radio
                                    field={{
                                        name: fieldName,
                                        key: v.key,
                                        value: v.value ?? v.key,
                                        label: v.label ?? (v.value ?? v.key),
                                        disabled: v.disabled ?? false,
                                    }}
                                    currentValue={currentValue}
                                    onChange={onChange}
                                    prefix={prefix}
                                    classes={classes.radio}
                                    attributes={v.attributes}
                                    datasets={v.datasets}
                                />
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    )
}
