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
import {initialize, initializeDatasets} from "../common";

export const CheckboxGroup = (props: CheckboxGroupProps) => {
    const {
        name,
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
                    v.attributes = initialize(
                        v['attributes'] as CheckboxAttributes, [
                            'label', 'input'
                        ], {}
                    );
                    const {datasets} = initializeDatasets(
                        v['datasets'] as CheckboxDatasets, [
                            'label', 'input'
                        ], new Map()
                    );
                    v.datasets = datasets;

                    return (
                        <Fragment key={idx}>
                            <Checkbox
                                name={name}
                                id={v.id}
                                value={v.value}
                                label={v.label}
                                disabled={v.disabled}
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
