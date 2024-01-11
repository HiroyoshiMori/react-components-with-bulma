import React, {Fragment} from "react";
import {
    DialogHeaderAttributes,
    DialogHeaderClasses,
    DialogHeaderDatasets,
    DialogHeaderProps,
} from "../../@types";
import {Button} from "../../element";
import {initialize, initializeDatasets} from "../../common";

export const DialogHeader = (props: DialogHeaderProps) => {
    const {
        title,
        onClose,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as DialogHeaderAttributes, [
            'wrap', 'title', 'button'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as DialogHeaderDatasets, [
            'wrap', 'title', 'button'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as DialogHeaderClasses, [
            'wrap', 'title'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'modal-card-head'; break;
                case 'title': defaultValue = 'modal-card-title'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (attributes.button && !Object.hasOwn(attributes?.button, 'aria-label')) {
        attributes.button['aria-label'] = 'close';
    }

    return (
        <Fragment>
            <header
                className={classes.wrap?.join(' ')}
                {...attributes?.wrap}
                {...datasetShown.wrap}
            >
                <div
                    className={classes.title?.join(' ')}
                    {...attributes.title}
                    {...datasetShown.title}
                >
                    {title}
                </div>
                <Button
                    label=""
                    onClick={onClose}
                    noDefaultClasses={true}
                    classes={["delete"]}
                    attributes={attributes.button}
                    datasets={datasets.button}
                />
            </header>
        </Fragment>
    );
};
