import React, {Fragment} from "react";
import {
    FormTextareaProps,
    TextareaAttributes,
    TextareaClasses,
    TextareaDatasets,
} from "../@types";
import {
    Label,
    Textarea,
} from "../element";
import {initialize, initializeDatasets} from "../common";

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
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as TextareaAttributes, [
            'wrap', 'control', 'textarea'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as TextareaDatasets, [
            'wrap', 'control', 'textarea'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as TextareaClasses, [
            'wrap', 'control', 'textarea'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
                case 'textarea': defaultValue = 'textarea'; break;
            }
            return defaultValue;
        }
    );

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
