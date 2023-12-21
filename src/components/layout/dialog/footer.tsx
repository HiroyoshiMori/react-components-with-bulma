import React, {Fragment, ReactNode} from "react";
import {
    CommonDataSet,
    DialogFooterAttributes,
    DialogFooterClasses,
    DialogFooterDatasets,
} from "../../@types";
import {Button} from "../../mui";
import {convertDataSet} from "../../../utils";

export type FooterProps = {
    buttonLabel: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: DialogFooterClasses;
    attributes?: DialogFooterAttributes;
    datasets?: DialogFooterDatasets;
};

export const Footer = (props: FooterProps) => {
    const {
        buttonLabel,
        onClose,
        classes = {},
        attributes = {},
        datasets = {},
    } = {...props};

    // Initialize if undefined
    (['wrap', 'button'] as Array<keyof DialogFooterClasses>).forEach((k: keyof DialogFooterClasses) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    (['wrap', 'button'] as Array<keyof DialogFooterAttributes>).forEach((k: keyof DialogFooterAttributes) => {
        if (attributes[k] === undefined) {
            attributes[k] = {};
        }
    });
    (['wrap', 'button'] as Array<keyof DialogFooterDatasets>).forEach((k: keyof DialogFooterDatasets) => {
        if (datasets[k] === undefined) {
            datasets[k] = new Map();
        }
    });
    // Set default values if not already set
    if (classes.wrap && !classes.wrap.includes('modal-card-foot')) {
        classes.wrap.push('modal-card-foot');
    }
    if (classes.button && !classes.button.includes('button')) {
        classes.button.push('button');
    }
    let datasetShown = {} as any;
    (['wrap', 'button'] as Array<keyof DialogFooterDatasets>)
        .forEach((k: keyof DialogFooterDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = [];
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

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
