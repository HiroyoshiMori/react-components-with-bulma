import React, {ChangeEvent, Fragment} from "react";
import {RadioClasses, RadioGroupClasses, RadioGroupFields} from "../../@types";
import {Radio} from "./radio";

export type RadioGroupProps = {
    fieldName: string;
    fields: RadioGroupFields[];
    currentValue: string|number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioGroupClasses,
};

export const RadioGroup = (
    {
        fieldName,  fields,  currentValue,  onChange, prefix = '',  classes = {}, ...props
    }: RadioGroupProps
) => {
    if (classes.group === undefined) {
        classes.group = [];
    }
    if (classes.radio === undefined) {
        classes.radio = {};
    }
    (['wrap', 'label', 'input'] as Array<keyof RadioClasses>).forEach((k) => {
        if (classes.radio && classes.radio[k] === undefined) {
            classes.radio[k] = [];
        }
    });
    return (
        <Fragment>
            <div className={classes.group.join(' ')}>
                {
                    fields.map((v) => {
                        return (
                            <Fragment key={(prefix ? (prefix + '-') : '') + v.key}>
                                <Radio
                                    field={{
                                        name: fieldName,
                                        key: v.key,
                                        value: v.value ?? v.key,
                                        label: v.label ?? (v.value ?? v.key),
                                        disabled: v.disabled ?? false
                                    }}
                                    currentValue={currentValue}
                                    onChange={onChange}
                                    prefix={prefix}
                                    classes={classes.radio}
                                />
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    )
}
