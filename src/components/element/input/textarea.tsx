import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    SIZES,
    STATES,
    TextareaProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Textarea = (props: TextareaProps) => {
    const {
        name,
        id,
        children,
        cols = 20,
        rows = 2,
        placeholder,
        maxLength,
        minLength,
        wordWrap,
        required = false,
        disabled = false,
        readOnly = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Set initial values if not already set
    (['colorType', 'size', 'state'] as Array<keyof TextareaProps>)
        .forEach((k: keyof TextareaProps) => {
            if (props[k]) {
                let pattern;
                switch (k) {
                    case 'colorType':
                        pattern = COLOR_TYPES.join('|');
                        break;
                    case 'size':
                        pattern = SIZES.join('|');
                        break;
                    case 'state':
                        pattern = STATES.join('|');
                        break;
                }
                if (pattern) {
                    const reg = '^is-($pattern)$';
                    if (ArrayRegexIncludes(classes, new RegExp(reg)) === -1) {
                        classes.push('is-' + props[k]);
                    }
                }
            }
        });

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <textarea
                name={name}
                id={id}
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                wrap={wordWrap}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </textarea>
        </Fragment>
    )
};
