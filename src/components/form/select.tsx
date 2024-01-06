import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    CommonDataSet, FormInputFileAttributes, FormInputFileClasses, FormInputFileDatasets,
    FormSelectAttributes,
    FormSelectClasses,
    FormSelectDatasets,
    FormSelectProps, SIZES, STATES
} from "../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../utils";
import {
    Icons,
    Label,
    Select,
} from "../element";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {initialize, initializeDatasets} from "../common";

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
        icon,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as FormSelectAttributes, [
            'wrap', 'control', 'div', 'select', 'icon'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as FormSelectDatasets, [
            'wrap', 'control', 'div', 'select', 'icon'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as FormSelectClasses, [
            'wrap', 'control', 'div', 'select',
            'optgroup', 'option', 'icon'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
                case 'div': defaultValue = 'select'; break;
                case 'icon': defaultValue = 'icon'; break;
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
    if (fontSize) {
        const pattern = '^is-(' + SIZES.join('|') + ')$';
        if (pattern && classes.icon) {
            const reg: string = `^is-(${pattern})$`;
            if (ArrayRegexIncludes(classes.icon, new RegExp(reg)) === -1) {
                classes.icon.push('is-' + fontSize);
            }
        }
    }
    if (icon && classes.control) {
        (['control', 'icon'] as Array<keyof FormSelectClasses>)
            .forEach((k: keyof FormSelectClasses) => {
                let checkValue;
                switch (k) {
                    case 'control': checkValue = 'has-icons-left'; break;
                    case 'icon': checkValue = 'is-left'; break;
                }
                if (checkValue) {
                    classes[k]?.push(checkValue);
                }
            });
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
                    {
                        icon && (
                            <Fragment>
                                <Icons
                                    icon={icon}
                                    classes={classes.icon}
                                    attributes={attributes.icon}
                                    datasets={datasets.icon}
                                />
                            </Fragment>
                        )
                    }
                </div>
            </Tag>
        </Fragment>
    );
};
