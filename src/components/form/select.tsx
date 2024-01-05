import React, {Fragment} from "react";
import {CommonDataSet, FormSelectAttributes, FormSelectClasses, FormSelectDatasets, FormSelectProps} from "../@types";
import {convertDataSet} from "../../utils";
import {Label} from "../element";
import {Select} from "../element/input/select";

export const FormSelect = (props: FormSelectProps) => {
    const {
        name,
        id,
        prefix = '',
        options,
        currentValues,
        multiple,
        size,
        colorType,
        state,
        fontSize,
        onChange,
        label,
        noDivWrap = false,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'control', 'div', 'select'] as Array<keyof FormSelectAttributes>)
        .forEach((k: keyof FormSelectAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    let datasetShown = {} as any;
    (['wrap', 'control', 'div', 'select'] as Array<keyof FormSelectDatasets>)
        .forEach((k: keyof FormSelectDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });
    // Initialize if undefined and set default values if not already set
    (['wrap', 'control', 'div', 'select', 'optgroup', 'option'] as Array<keyof FormSelectClasses>)
        .forEach((k: keyof FormSelectClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
                case 'div': defaultValue = 'select'; break;
            }
        });

    // Set default values if not already set
    if (label) {
        if (label.classes === undefined) {
            label.classes = [];
        }
        if (!label.classes.includes('label')) {
            label.classes.push('label');
        }
    }
    const Tag = noDivWrap ? Fragment : 'div';

    return (
        <Fragment>
            <Tag
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                {label && (<Label {...label} />)}
                <div
                    className={classes.control?.join(' ')}
                    {...attributes?.control}
                    {...datasetShown.control}
                >
                    <Select
                        name={name}
                        id={id}
                        options={options}
                        currentValues={currentValues}
                        multiple={multiple}
                        size={size}
                        colorType={colorType}
                        state={state}
                        fontSize={fontSize}
                        onChange={onChange}
                        classes={{
                            div: classes.div,
                            select: classes.select,
                            optgroup: classes.optgroup,
                            option: classes.option,
                        }}
                        attributes={{
                            div: attributes.div,
                            select: attributes.select,
                        }}
                        datasets={{
                            div: datasets.div,
                            select: datasets.select,
                        }}
                    />
                </div>
            </Tag>
        </Fragment>
    );
};
