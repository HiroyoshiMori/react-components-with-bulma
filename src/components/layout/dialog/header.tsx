import React, {Fragment} from "react";
import {
    CommonDataSet,
    DialogHeaderAttributes,
    DialogHeaderClasses,
    DialogHeaderDatasets,
    DialogHeaderProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {Button} from "../../element";

export const Header = (props: DialogHeaderProps) => {
    const {
        title,
        onClose,
        classes = {
            wrap: [],
            title: [],
        },
        attributes = {},
        datasets = {},
    } = {...props};

    // Initialize if undefined
    (['wrap', 'title', 'button'] as Array<keyof DialogHeaderAttributes>)
        .forEach((k: keyof DialogHeaderAttributes) => {
        if (attributes[k] === undefined) {
            attributes[k] = {};
        }
    });
    (['wrap', 'title', 'button'] as Array<keyof DialogHeaderDatasets>)
        .forEach((k: keyof DialogHeaderDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['wrap', 'title'] as Array<keyof DialogHeaderClasses>).forEach((k: keyof DialogHeaderClasses) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    // Set default values if not already set
    if (classes.wrap && !classes.wrap.includes('modal-card-head')) {
        classes.wrap?.push('modal-card-head');
    }
    if (classes.title && !classes.title.includes('modal-card-title')) {
        classes.title.push('modal-card-title');
    }
    if (attributes.button && !Object.hasOwn(attributes?.button, 'aria-label')) {
        attributes.button['aria-label'] = 'close';
    }
    let datasetShown = {} as any;
    (['wrap', 'title', 'button'] as Array<keyof DialogHeaderDatasets>)
        .forEach((k: keyof DialogHeaderDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

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
                    classes={["delete"]}
                    onClick={onClose}
                    attributes={attributes.button}
                    datasets={datasets.button}
                />
            </header>
        </Fragment>
    );
};
