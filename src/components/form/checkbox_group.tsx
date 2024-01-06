import React, {
    Fragment,
} from "react";
import {
    CheckboxGroupProps,
    CheckboxClasses,
    CheckboxGroupFieldsProps,
    CheckboxAttributes,
    CheckboxDatasets,
} from "../@types";
import {Checkbox} from "../element";
import {initialize} from "../common";

export const CheckboxGroup = (props: CheckboxGroupProps) => {
    const {
        fieldName,
        fields,
        currentValues = [],
        onChange,
        prefix = '',
    } = props;

    // Initialize if undefined
    const classes = initialize(
        props['classes'] as CheckboxClasses, [
            'label', 'input'
        ], []
    );

    return (
        <Fragment>
            {
                fields && fields.map((v: CheckboxGroupFieldsProps, idx: number) => {
                    // Initialize if undefined
                    v.attributes = v.attributes ?? {};
                    v.datasets = v.datasets ?? {};
                    (['label', 'input'] as Array<keyof CheckboxAttributes>)
                        .forEach((k: keyof CheckboxAttributes) => {
                            if (v.attributes && v.attributes[k] === undefined) {
                                v.attributes[k] = {};
                            }
                        });
                    (['label', 'input'] as Array<keyof CheckboxDatasets>)
                        .forEach((k: keyof CheckboxDatasets) => {
                            if (v.datasets && v.datasets[k] === undefined) {
                                v.datasets[k] = new Map();
                            }
                        });
                    return (
                        <Fragment key={idx}>
                            <Checkbox
                                field={{
                                    ...v.field,
                                    name: fieldName,
                                }}
                                currentValues={currentValues}
                                onChange={onChange}
                                prefix={prefix}
                                classes={{
                                    label: classes.label,
                                    input: classes.input,
                                }}
                                attributes={v.attributes}
                                datasets={v.datasets}
                            />
                        </Fragment>
                    );
                })
            }
        </Fragment>
    )
}
