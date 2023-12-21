import React, {ChangeEvent, Fragment, InputHTMLAttributes} from "react";

import {
    COLOR_TYPES,
    ColorTypes,
    CommonDataSet,
    CommonStyleClasses,
    SIZES,
    SizeTypes,
    STATES,
    StateTypes
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export type InputProps = {
    fieldName: string;
    value: string|number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    colorType?: ColorTypes;
    state?: StateTypes;
    size?: SizeTypes;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

export const TextBox = (props: InputProps) => {
    const {
        fieldName,
        value,
        onChange,
        classes = [],
        placeholder = '',
        attributes,
        datasets = new Map(),
    } = {...props};

    // Initialize if undefined
    (['colorType', 'state', 'size'] as Array<keyof InputProps>).forEach((v: keyof InputProps) => {
        if (props[v]) {
            let pattern = null;
            switch (v) {
                case 'colorType':
                    pattern = COLOR_TYPES.join('|'); break;
                case 'state':
                    pattern = STATES.join('|'); break;
                case 'size':
                    pattern = SIZES.join('|'); break;
            }
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (!ArrayRegexIncludes(classes, new RegExp(reg))) {
                    classes.push('is-' + props[v]);
                }
            }
        }
    });
    // Set default values if not already set
    if (!classes.includes('input')) {
        classes.push('input');
    }
    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <input
                className={classes.join(' ')}
                type="text"
                name={fieldName}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...attributes}
                {...dataShown}
            />
        </Fragment>
    );
};
