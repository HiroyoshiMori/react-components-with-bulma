import {Fragment} from "react";
import {
    CommonDataSet,
    COLOR_TYPES,
    SIZES,
    STATES,
    TextFieldProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const TextField = (props: TextFieldProps) => {
    const {
        name,
        id,
        type = 'text',
        value,
        onChange,
        placeholder = '',
        classes = [],
        attributes,
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    (['colorType', 'state', 'size'] as Array<keyof TextFieldProps>)
        .forEach((v: keyof TextFieldProps) => {
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
                    if (ArrayRegexIncludes(classes, new RegExp(reg)) === -1) {
                        classes.push('is-' + props[v]);
                    }
                }
            }
        });
    // Set default values if not already set
    if (!classes.includes('input')) {
        classes.push('input');
    }
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
