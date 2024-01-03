import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    SIZES,
    SubmitButtonFields,
    SubmitImageFields,
    SubmitProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Submit = (props: SubmitProps) => {
    const {
        additionalProps,
    } = props;

    // Initialize if undefined
    let componentType;
    switch (additionalProps.type) {
        case 'image':
            componentType = 'image';
            break;
        default:
            componentType = 'submit';
    }

    return (
        <Fragment>
            {
                componentType === 'submit'
                    ? SubmitButton(props) : SubmitImage(props)
            }
        </Fragment>
    );
};

const SubmitButton = (props: SubmitProps) => {
    const {
        name,
        onClick,
        prefix = '',
        disabled = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;
    const additionalProps: SubmitButtonFields = props.additionalProps as SubmitButtonFields;

    // Set default values if not already set
    (["colorType", "size"] as Array<keyof SubmitButtonFields>)
        .forEach((v: keyof SubmitButtonFields) => {
            if (additionalProps[v]) {
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
                        classes.push('is-' + additionalProps[v]);
                    }
                }
            }
        });
    // Set default values if not already set
    if (!additionalProps.noDefaultClasses) {
        if (!classes.includes('button')) {
            classes.push('button');
        }
        if (!classes.includes('is-responsive')) {
            classes.push('is-responsive');
        }
    }
    if (additionalProps.colorLight && !classes.includes('is-light')) {
        classes.push('is-light');
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <input
                type={additionalProps.type}
                name={prefix + name}
                value={additionalProps.value}
                onClick={onClick}
                disabled={disabled}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};

const SubmitImage = (props: SubmitProps) => {
    const {
        name,
        id,
        onClick,
        prefix = '',
        disabled = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;
    const additionalProps: SubmitImageFields = props.additionalProps as SubmitImageFields;

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <input
                type={additionalProps.type}
                name={prefix + name}
                id={id}
                onClick={onClick}
                src={additionalProps.src}
                alt={additionalProps.alt}
                disabled={disabled}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};

