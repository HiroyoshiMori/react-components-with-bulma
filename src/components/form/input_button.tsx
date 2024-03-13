import {Fragment} from "react";
import {
    InputAttributes,
    InputButtonClasses,
    InputButtonProps,
    InputDatasets,
} from "../@types";
import {Submit} from "../element/button/submit";
import {initialize, initializeDatasets} from "../common";

export const InputButton = (itemProps: InputButtonProps) => {
    const {
        name,
        id,
        additionalProps,
        onClick,
        prefix,
        disabled,
    } = itemProps;

    // Initialize if undefined
    const attributes = initialize(
        itemProps['attributes'] as InputAttributes, [
            'control',
        ], {}
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        itemProps['classes'] as InputButtonClasses, [
            'control', 'input',
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'control': defaultValue = 'control'; break;
                case 'input': defaultValue = 'button'; break;
            }
            return defaultValue;
        }
    );
    const {datasets, datasetShown} = initializeDatasets(
        itemProps['datasets'] as InputDatasets, [
            'control',
        ], new Map()
    );

    return (
        <Fragment>
            <div
                className={classes.control?.join(' ')}
                {...attributes.control}
                {...datasetShown.control}
            >
                <Submit
                    name={name}
                    id={id}
                    additionalProps={additionalProps}
                    onClick={onClick}
                    prefix={prefix}
                    disabled={disabled}
                    classes={classes.input}
                    attributes={attributes.input}
                    datasets={datasets.input}
                />
            </div>
        </Fragment>
    );
};
