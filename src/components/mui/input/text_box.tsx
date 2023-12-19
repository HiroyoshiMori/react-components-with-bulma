import React, {ChangeEvent, Fragment} from "react";

import {COLOR_TYPES, ColorTypes, CommonStyleCLasses, SIZES, SizeTypes, STATES, StateTypes} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";

export type InputProps = {
    fieldName: string;
    value: string|number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    colorType?: ColorTypes;
    state?: StateTypes;
    size?: SizeTypes;
} & CommonStyleCLasses;

export const TextBox = (props: InputProps) => {
    const {
        fieldName,
        value,
        onChange,
        classes = [],
        placeholder = '',
    } = {...props};
    if (!classes.includes('input')) {
        classes.push('input');
    }
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
    return (
        <Fragment>
            <input
                className={classes.join(' ')}
                type="text"
                name={fieldName}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Fragment>
    );
};
