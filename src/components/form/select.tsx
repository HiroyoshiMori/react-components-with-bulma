import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    CommonDataSet,
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
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'control', 'div', 'select', 'icon'] as Array<keyof FormSelectAttributes>)
        .forEach((k: keyof FormSelectAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    let datasetShown = {} as any;
    (['wrap', 'control', 'div', 'select', 'icon'] as Array<keyof FormSelectDatasets>)
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
    (['wrap', 'control', 'div', 'select', 'optgroup', 'option', 'icon'] as Array<keyof FormSelectClasses>)
        .forEach((k: keyof FormSelectClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let defaultValue;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
                case 'div': defaultValue = 'select'; break;
                case 'icon': defaultValue = 'icon'; break;
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
