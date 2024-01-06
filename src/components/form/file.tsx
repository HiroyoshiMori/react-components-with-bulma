import React, {Fragment} from "react";
import {
    FormInputFileAttributes, FormInputFileClasses, FormInputFileDatasets, FormInputFileProps,
} from "../@types";
import {
    InputFile,
    Label,
    Textarea,
} from "../element";
import {initialize, initializeDatasets} from "../common";

export const FormInputFile = (props: FormInputFileProps) => {
    const {
        type,
        name,
        id,
        buttonLabel,
        icon,
        isBoxed = false,
        fileNameLabel,
        fileNamePositionLeft = false,
        fileNameExpanded = false,
        colorType,
        size,
        alignment,
        prefix = '',
        label,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as FormInputFileAttributes, [
            'wrap', 'control', 'div', 'label', 'input',
            'cta', 'icon', 'labelSpan', 'fileNameLabel'
        ], {}
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as FormInputFileClasses, [
            'wrap', 'control', 'div', 'label', 'input',
            'cta', 'icon', 'labelSpan', 'fileNameLabel'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'field'; break;
                case 'control': defaultValue = 'control'; break;
            }
            return defaultValue;
        }
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as FormInputFileDatasets, [
            'wrap', 'control', 'div', 'label', 'input',
            'cta', 'icon', 'labelSpan', 'fileNameLabel'
        ], new Map()
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

    return (
        <Fragment>
            { label && ( <Label {...label} /> ) }
            <div
                className={classes.control?.join(' ')}
                {...attributes?.control}
                {...datasetShown.control}
            >
                <InputFile
                    type={type} name={prefix+name} id={id}
                    buttonLabel={buttonLabel} icon={icon}
                    isBoxed={isBoxed} fileNameLabel={fileNameLabel}
                    fileNamePositionLeft={fileNamePositionLeft}
                    fileNameExpanded={fileNameExpanded}
                    colorType={colorType} size={size} alignment={alignment}
                    classes={{
                        div: classes.div,
                        label: classes.label,
                        input: classes.input,
                        cta: classes.cta,
                        icon: classes.icon,
                        labelSpan: classes.labelSpan,
                        fileNameLabel: classes.fileNameLabel,
                    }}
                    attributes={{
                        div: attributes.div,
                        label: attributes.label,
                        input: attributes.input,
                        cta: attributes.cta,
                        icon: attributes.icon,
                        labelSpan: attributes.labelSpan,
                        fileNameLabel: attributes.fileNameLabel,
                    }}
                    datasets={{
                        div: datasets.div,
                        label: datasets.label,
                        input: datasets.input,
                        cta: datasets.cta,
                        icon: datasets.icon,
                        labelSpan: datasets.labelSpan,
                        fileNameLabel: datasets.fileNameLabel,
                    }}
                />
            </div>
        </Fragment>
    );
};
