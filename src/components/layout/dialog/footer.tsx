import React, {Fragment} from "react";
import {
    DialogFooterAttributes,
    DialogFooterClasses,
    DialogFooterDatasets,
    DialogFooterProps,
} from "../../@types";
import {Button} from "../../element";
import {initialize, initializeDatasets} from "../../common";

export const DialogFooter = (props: DialogFooterProps) => {
    const {
        buttonLabel,
        onClose,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as DialogFooterAttributes, [
            'wrap', 'button'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as DialogFooterDatasets, [
            'wrap', 'button'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as DialogFooterClasses, [
            'wrap', 'button'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'modal-card-foot'; break;
                case 'button': defaultValue = 'button'; break;
            }
            return defaultValue;
        }
    );

    return (
        <Fragment>
            <footer
                className={classes.wrap?.join(' ')}
                {...attributes?.wrap}
                {...datasetShown.wrap}
            >
                <Button
                    label={buttonLabel}
                    classes={classes.button}
                    onClick={onClose}
                    attributes={attributes?.button}
                    datasets={datasets.button}
                />
            </footer>
        </Fragment>
    )
};
