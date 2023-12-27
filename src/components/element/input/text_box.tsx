import React, {Fragment} from "react";
import {
    CommonDataSet,
    COLOR_TYPES,
    SIZES,
    STATES,
    InputProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const TextBox = (props: InputProps) => {
    const {
        fieldName,
        fieldType = 'text',
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
                type={fieldType}
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
