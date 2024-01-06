import React, {Fragment} from "react";
import {
    IconsProps,
    InputAttributes,
    InputDatasets,
    InputTextClasses,
    InputTextProps,
} from "../@types";
import {Icons, Label, TextBox} from "../element";
import {initialize, initializeDatasets} from "../common";

export const InputTextBox = (itemProps: InputTextProps) => {
    let {
        type,
        name,
        id,
        value,
        label,
        placeholder,
        iconLeft,
        iconRight,
        prefix,
        onChange,
        colorType,
        state,
        size,
    } = itemProps;

    // Initialize if undefined
    const attributes = initialize(
        itemProps['attributes'] as InputAttributes, [
            'control'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        itemProps['datasets'] as InputDatasets, [
            'control'
        ], new Map()
    );
    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        itemProps['classes'] as InputTextClasses, [
            'control', 'input'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'input': defaultValue = 'input'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (label) {
        if (id) {
            label.htmlFor = id;
        }
        if (label.classes === undefined) {
            label.classes = [];
        }
        if (!label.classes.includes('label')) {
            label.classes.push('label');
        }
    }
    (['iconLeft', 'iconRight'] as Array<keyof InputTextProps>)
        .forEach((k: keyof InputTextProps) => {
            if (itemProps[k]) {
                if ((itemProps[k] as IconsProps).classes === undefined) {
                    (itemProps[k] as IconsProps).classes = [];
                }
                let defaultValue;
                let controlValue;
                switch (k) {
                    case 'iconLeft': defaultValue = 'is-left'; controlValue = 'has-icons-left'; break;
                    case 'iconRight': defaultValue = 'is-right'; controlValue = 'has-icons-right'; break;
                }
                if (defaultValue && !(itemProps[k] as IconsProps).classes?.includes(defaultValue)) {
                    (itemProps[k] as IconsProps).classes?.push(defaultValue);
                }
                if (controlValue && classes.control && !classes.control.includes(controlValue)) {
                    classes.control?.push(controlValue);
                }
            }
        });

    return (
        <Fragment>
            { label && ( <Label {...label} /> ) }
            <div
                className={classes.control?.join(' ')}
                {...attributes?.control}
                {...datasetShown.control}
            >
                <TextBox
                    fieldName={prefix ? (prefix + name) : name}
                    fieldType={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    colorType={colorType}
                    state={state}
                    size={size}
                    classes={classes?.input}
                    attributes={attributes?.input}
                    datasets={datasets?.input}
                />
                { iconLeft && ( <Icons {...iconLeft} /> ) }
                { iconRight && ( <Icons {...iconRight} /> ) }
            </div>
        </Fragment>
    );
};
