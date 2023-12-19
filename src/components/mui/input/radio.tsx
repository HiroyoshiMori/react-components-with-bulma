import React, {ChangeEvent, Fragment} from "react";
import {RadioClasses, RadioGroupFields} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {Label} from "../label";

export type RadioProps = {
    field: { name: string } & RadioGroupFields;
    currentValue: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioClasses;
};

export const Radio = (
    {
        field, currentValue, onChange, prefix = '', classes = {}, ...props
    }: RadioProps
) => {
    (['wrap', 'label', 'input'] as Array<keyof RadioClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.label && !classes.label.includes('radio')) {
        classes.label.push('radio');
    }
    if (classes.input) {
        if (!ArrayRegexIncludes(classes.input, /^mr?-([0-6]|auto)$/)) {
            classes.input.push('mr-1');
        }
    }
    return (
        <Fragment>
            <div key={(prefix ? (prefix + '-') : '') + field.key} className={classes.wrap?.join(' ')}>
                <Label
                    classes={classes.label}
                    htmlFor={(prefix ? (prefix + '-') : '') + field.key}
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
                    />
                    <span>{field.label ?? (field.value ?? field.key)}</span>
                </Label>
            </div>
        </Fragment>
    );
}
