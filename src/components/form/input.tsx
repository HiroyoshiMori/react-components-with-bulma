import React, {Fragment} from "react";
import {
    CommonDataSet,
    InputAttributes,
    InputButtonProps,
    InputCheckboxProps,
    InputClasses,
    InputDatasets, InputOtherClasses, InputOtherProps,
    InputProps,
    InputRadioProps,
    InputTextProps,
} from "../@types";
import {convertDataSet} from "../../utils";
import {InputCheckboxGroup} from "./input_checkbox";
import {InputButton} from "./input_button";
import {InputTextBox} from "./input_text";
import {InputRadioGroup} from "./input_radio";
import {Label} from "../element";

export const FormInput = (props: InputProps) => {
    const {
        type,
        noDivWrap = false,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'control', 'input'] as Array<keyof InputAttributes>)
        .forEach((k: keyof InputAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'control', 'input'] as Array<keyof InputDatasets>)
        .forEach((k: keyof InputDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });

    // Initialize if undefined and set default values if not already set
    (['wrap', 'control', 'input'] as Array<keyof InputClasses>)
        .forEach((k: keyof InputClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
            }
            if (defaultValue && !classes[k]?.includes(defaultValue)) {
                classes[k]?.push(defaultValue);
            }
        });

    // Set default values if not already set
    let componentType;
    switch (type) {
        case 'radio':
            componentType = 'Radio';
            break;
        case 'checkbox':
            componentType = 'Checkbox';
            break;
        case 'submit': case 'button': case 'image':
            componentType = 'Submit';
            break;
        case 'text': case 'password': case 'email': case 'tel': case 'number': case 'search': case 'url':
            componentType = 'TextBox';
            break;
        case 'color': case 'range':
        case 'date': case 'datetime-local': case 'month': case 'time': case 'week':
            componentType = 'Others';
            break;
        default:
            componentType = 'Unsupported';
    }

    const Tag = noDivWrap ? Fragment : 'div';
    const datasetShown = convertDataSet(datasets.wrap as CommonDataSet);

    return (
        <Fragment>
            <Tag
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                {
                    componentType === 'TextBox'
                        ? InputTextBox({
                            ...props,
                            classes: classes,
                            attributes: attributes,
                            datasets: datasets,
                        } as InputTextProps)
                        : componentType === 'Radio'
                            ? InputRadioGroup({
                                ...props,
                                classes: classes,
                                attributes: attributes,
                                datasets: datasets,
                            } as InputRadioProps)
                            : componentType === 'Checkbox'
                                ? InputCheckboxGroup({
                                    ...props,
                                    classes: classes,
                                    attributes: attributes,
                                    datasets: datasets,
                                } as InputCheckboxProps)
                                : componentType === 'Submit'
                                    ? InputButton({
                                        ...props,
                                        classes: classes,
                                        attributes: attributes,
                                        datasets: datasets,
                                    } as InputButtonProps)
                                    : componentType === 'Others'
                                        ? (
                                            <Fragment>

                                            </Fragment>
                                        )
                                        : (
                                        <Fragment>
                                            Un-supported.
                                        </Fragment>
                                    )
                }
            </Tag>
        </Fragment>
    );
};

const InputOthers = (props: InputOtherProps) => {
    const {
        type,
        name,
        value,
        prefix = '',
        label,
        disabled = false,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

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
    (['control', 'input'] as Array<keyof InputOtherClasses>)
        .forEach((k: keyof InputOtherClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
            }
            if (defaultValue && !classes[k]?.includes(defaultValue)) {
                classes[k]?.push(defaultValue);
            }
        });

    let datasetShown = {} as any;
    (['control', 'input'] as Array<keyof InputDatasets>)
        .forEach((k: keyof InputDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });

    return (
        <Fragment>
            { label && ( <Label {...label} /> ) }
            <div
                className={classes.control?.join(' ')}
                {...attributes?.control}
                {...datasetShown}
            >
                <input
                    type={type}
                    name={prefix + name}
                    value={value}
                    disabled={disabled}
                    className={classes.input?.join(' ')}
                    {...attributes.input}
                    {...datasetShown.input}
                />
            </div>
        </Fragment>
    );
};