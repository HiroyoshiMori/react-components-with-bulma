import React, {Fragment} from "react";
import {
    CommonDataSet,
    IconsProps,
    InputAttributes,
    InputDatasets,
    InputTextClasses,
    InputTextProps,
} from "../@types";
import {convertDataSet} from "../../utils";
import {Icons, Label, TextBox} from "../element";

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
        classes = {},
        attributes = {},
        datasets = {},
    } = itemProps;

    // Initialize if undefined
    (['control'] as Array<keyof InputAttributes>)
        .forEach((k: keyof InputAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['control'] as Array<keyof InputDatasets>)
        .forEach((k: keyof InputDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['control', 'input'] as Array<keyof (InputTextClasses)>)
        .forEach((k: keyof (InputTextClasses)) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'input': defaultValue = 'input'; break;
            }
            if (defaultValue && !classes[k]?.includes(defaultValue)) {
                classes[k]?.push(defaultValue);
            }
        });

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
    const datasetShown = convertDataSet(datasets.control as CommonDataSet);

    return (
        <Fragment>
            { label && ( <Label {...label} /> ) }
            <div
                className={classes.control?.join(' ')}
                {...attributes?.control}
                {...datasetShown}
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
