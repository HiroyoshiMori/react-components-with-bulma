import React, {Fragment} from "react";
import {sprintf} from "sprintf-js";
import {
    CommonDataSet,
    ProgressBarAttributes,
    ProgressBarDatasets,
    ProgressBarProps,
} from "../../@types";
import {Dialog} from "./index";
import {convertDataSet} from "../../../utils";

export const ProgressBar = (
    props: ProgressBarProps
) => {
    const {
        isActive,
        title,
        value,
        max,
        onClose,
        attributes = {},
        datasets = {},
    } = {...props};

    // Set default values if not already set
    (['dialog', 'progressbar'] as Array<keyof ProgressBarAttributes>)
        .forEach((k: keyof ProgressBarAttributes) => {
        if (attributes[k] === undefined) {
            attributes[k] = {};
        }
    });
    (['dialog', 'progressbar'] as Array<keyof ProgressBarDatasets>)
        .forEach((k: keyof ProgressBarDatasets) => {
        if (datasets[k] === undefined) {
            switch (k) {
                case 'dialog': datasets[k] = {}; break;
                case 'progressbar': datasets[k] = new Map(); break;
            }
        }
    });
    const datasetsShown = convertDataSet(datasets.progressbar as CommonDataSet);

    return (
        <Fragment>
            <Dialog
                isActive={isActive}
                title={title}
                noFooter={true}
                onClose={onClose}
                buttonLabel='Close'
                classes={{
                    header: {
                        wrap: ['p-3'],
                        title: ['is-size-6'],
                    },
                    content: ['pt-3', 'pr-5', 'pb-3', 'pl-5'],
                    footer: {
                        wrap: ['is-justify-content-flex-end', 'p-3'],
                    },
                }}
                attributes={attributes?.dialog}
                datasets={datasets.dialog}
            >
                <progress
                    className="progress is-info"
                    value={value}
                    max={max}
                    {...attributes?.progressbar}
                    {...datasetsShown}
                ></progress>
                <span>
                {
                    sprintf(
                        "%d",
                        (max > 0) ? value/max*100 : 0
                    )
                }% ({value}/{max})
                </span>
            </Dialog>
        </Fragment>
    )
};
