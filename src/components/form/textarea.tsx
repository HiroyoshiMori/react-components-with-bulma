import React, {Fragment} from "react";
import {
    CommonDataSet,
    FormTextareaProps,
    TextareaAttributes,
    TextareaClasses,
    TextareaDatasets,
} from "../@types";
import {
    Label,
    Textarea,
} from "../element";
import {convertDataSet} from "../../utils";

export const FormTextarea = (props: FormTextareaProps) => {
    const {
        name,
        id,
        prefix = '',
        label,
        children,
        cols = 20,
        rows = 2,
        placeholder,
        maxLength,
        minLength,
        wrap,
        required = false,
        disabled = false,
        readOnly = false,
        noDivWrap = false,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'control', 'textarea'] as Array<keyof TextareaAttributes>)
        .forEach((k: keyof TextareaAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'control', 'textarea'] as Array<keyof TextareaDatasets>)
        .forEach((k: keyof TextareaDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    // Initialize if undefined and set default values if not already set
    (['wrap', 'control', 'textarea'] as Array<keyof TextareaClasses>)
        .forEach((k: keyof TextareaClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
                case 'textarea': defaultValue = 'textarea'; break;
            }
            if (defaultValue && !classes[k]?.includes(defaultValue)) {
                classes[k]?.push(defaultValue);
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
    let datasetShown = {} as any;
    (['wrap', 'control', 'textarea'] as Array<keyof TextareaDatasets>)
        .forEach((k: keyof TextareaDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });

    return (
        <Fragment>
            <Tag
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                { label && ( <Label {...label} /> ) }
                <div
                    className={classes.control?.join(' ')}
                    {...attributes?.control}
                    {...datasetShown.control}
                >
                    <Textarea
                        name={prefix+name}
                        id={id}
                        cols={cols}
                        rows={rows}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        minLength={minLength}
                        wrap={wrap}
                        required={required}
                        disabled={disabled}
                        readOnly={readOnly}
                        classes={classes.textarea}
                        attributes={attributes.textarea}
                        datasets={datasets.textarea}
                    >
                        {children}
                    </Textarea>
                </div>
            </Tag>
        </Fragment>
    );
};
