import React, {Fragment} from "react";
import {
    CommonDataSet,
    COLOR_TYPES,
    SIZES,
    ButtonProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {Icons} from "../label";

export const Button = (props: ButtonProps) => {
    const {
        label,
        onClick,
        colorLight = false,
        disabled = false,
        noDefaultClasses = false,
        icon,
        iconPosition = 'left',
        classes = [],
        attributes= {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    (["colorType", "size"] as Array<keyof ButtonProps>)
        .forEach((v: keyof ButtonProps) => {
            if (props[v]) {
                let pattern: string | null = null;
                switch (v) {
                    case 'colorType':
                        pattern = COLOR_TYPES.join('|'); break;
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
    if (!noDefaultClasses) {
        if (!classes.includes('button')) {
            classes.push('button');
        }
        if (!classes.includes('is-responsive')) {
            classes.push('is-responsive');
        }
    }
    if (colorLight && !classes.includes('is-light')) {
        classes.push('is-light');
    }
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <button
                className={classes.join(' ')}
                onClick={onClick}
                disabled={disabled}
                {...attributes}
                {...datasetShown}
            >
                {
                    icon && iconPosition === 'left' && (
                        <Fragment>
                            <Icons
                                icon={icon}
                                classes={['mr-1']}
                            />
                        </Fragment>
                    )
                }
                {label}
                {
                    icon && iconPosition === 'right' && (
                        <Fragment>
                            <Icons
                                icon={icon}
                                classes={['ml-1']}
                            />
                        </Fragment>
                    )
                }
            </button>
        </Fragment>
    );
}
