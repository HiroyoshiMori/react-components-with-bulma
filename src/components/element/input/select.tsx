import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    SIZES, STATES,
} from "../../@types";
import {
    OptGroupClasses,
    OptGroupProps,
    OptionProps,
    SelectAttributes,
    SelectClasses,
    SelectDatasets,
    SelectProps
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Select = (props: SelectProps) => {
    const {
        name,
        id,
        options,
        currentValues= [],
        multiple = false,
        size,
        onChange,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as SelectAttributes, [
            'div', 'select'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as SelectDatasets, [
            'div', 'select'
        ], new Map()
    );
    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as SelectClasses, [
            'div', 'select', 'optgroup', 'option'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'div': defaultValue = 'select'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    (['colorType', 'state', 'fontSize'] as Array<keyof SelectProps>).forEach((v) => {
        if (props[v]) {
            let pattern: string | null = null;
            switch (v) {
                case 'colorType':
                    pattern = COLOR_TYPES.join('|'); break;
                case 'state':
                    pattern = STATES.join('|'); break;
                case 'fontSize':
                    pattern = SIZES.join('|'); break;
            }
            if (pattern && classes.div) {
                const reg: string = `^is-(${pattern})$`;
                if (ArrayRegexIncludes(classes.div, new RegExp(reg)) === -1) {
                    classes.div.push('is-' + props[v]);
                }
            }
        }
    });

    return (
        <Fragment>
            <div
                className={classes.div?.join(' ')}
                {...attributes.div}
                {...datasetShown.div}
            >
                <select
                    name={name}
                    id={id}
                    multiple={multiple}
                    size={multiple ? size : undefined}
                    onChange={onChange}
                    className={classes.select?.join(' ')}
                    {...attributes.select}
                    {...datasetShown.select}
                >
                    {
                        options && options.length > 0 && options.map((option, idx: number) => {
                            return (Object.hasOwn(option, 'isOptGroup')) ? (
                                <Fragment key={idx}>
                                    <OptGroup
                                        {...option as OptGroupProps}
                                        classes={{
                                            optgroup: classes.optgroup
                                                ? classes.optgroup.concat((option as OptGroupProps).classes?.optgroup ?? [])
                                                : (option as OptGroupProps).classes?.optgroup ?? [],
                                            option: classes.option
                                                ? classes.option.concat((option as OptGroupProps).classes?.option ?? [])
                                                : (option as OptGroupProps).classes?.option ?? [],
                                        }}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment key={idx}>
                                    <Option
                                        {...option as OptionProps}
                                        selected={currentValues.includes((option as OptionProps).value)}
                                        classes={
                                            classes.option
                                                ? classes.option.concat((option as OptionProps).classes ?? [])
                                                : (option as OptionProps).classes ?? []
                                        }
                                    />
                                </Fragment>
                            );
                        })
                    }
                </select>
            </div>
        </Fragment>
    );
};

const Option = (props: OptionProps) => {
    const {
        value,
        disabled = false,
        label,
        selected = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <option
                disabled={disabled}
                selected={selected}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {label ?? value}
            </option>
        </Fragment>
    );
};

const OptGroup = (props: OptGroupProps) => {
    const {
        label,
        options,
        currentValues = [],
        disabled = false,
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    (['optgroup', 'option'] as Array<keyof OptGroupClasses>)
        .forEach((k: keyof OptGroupClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });
    // Set default values if not already set
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <optgroup
                label={label}
                disabled={disabled}
                className={classes.optgroup?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    options && options.length > 0 && options.map((option: OptionProps, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                <Option
                                    {...option}
                                    selected={currentValues.includes(option.value)}
                                    classes={
                                        classes.option
                                            ? classes.option.concat(option.classes ?? [])
                                            : (option.classes ?? [])
                                    }
                                />
                            </Fragment>
                        );
                    })
                }
            </optgroup>
        </Fragment>
    );
};
