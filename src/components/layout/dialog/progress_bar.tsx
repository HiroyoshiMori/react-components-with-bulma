import React, {Fragment} from "react";
import {sprintf} from "sprintf-js";
import {
    COLOR_TYPES,
    CommonDataSet, DialogClasses, DialogHeaderClasses,
    ProgressBarAttributes, ProgressBarClasses,
    ProgressBarDatasets,
    ProgressBarProps,
} from "../../@types";
import {Dialog} from "./index";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {initialize} from "../../common";

export const ProgressBar = (
    props: ProgressBarProps
) => {
    const {
        isActive,
        title,
        value,
        max,
        onClose,
        datasets = {},
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as ProgressBarAttributes, [
            'dialog', 'progressbar'
        ], {}
    );
    const classes = initialize(
        props['classes'] as ProgressBarClasses, [
            'dialog', 'progressbar'
        ], []
    );
    (['dialog', 'progressbar'] as Array<keyof ProgressBarDatasets>)
        .forEach((k: keyof ProgressBarDatasets) => {
        if (datasets[k] === undefined) {
            switch (k) {
                case 'dialog': datasets[k] = {}; break;
                case 'progressbar': datasets[k] = new Map(); break;
            }
        }
    });

    // Set default values if not already set
    if (classes.dialog) {
        (['header', 'footer'] as Array<keyof DialogClasses>)
            .forEach((k: keyof DialogClasses) => {
                if (classes.dialog && classes.dialog[k] === undefined) {
                    switch (k) {
                        case 'header': case 'footer':
                            classes.dialog[k] = {};
                            break;
                    }
                }
            });
    }
    if (classes.dialog?.header) {
        (['wrap', 'title'] as Array<keyof DialogHeaderClasses>)
            .forEach((k: keyof DialogHeaderClasses) => {
                if (classes.dialog?.header) {
                    if (classes.dialog.header[k] === undefined) {
                        classes.dialog.header[k] = [];
                    }
                    let checkPattern;
                    let defaultValue;
                    switch (k) {
                        case 'wrap': checkPattern = '^p-([1-6])$'; defaultValue = 'p-3'; break;
                        case 'title': checkPattern = 'is-size-([1-7])'; defaultValue = 'is-size-6'; break;
                    }
                    if (checkPattern && ArrayRegexIncludes(classes.dialog.header[k] as string[], new RegExp(checkPattern)) === -1) {
                        classes.dialog.header[k]?.push(defaultValue);
                    }
                }
            });
    }
    if (classes.dialog?.content) {
        // ['pt-3', 'pr-5', 'pb-3', 'pl-5']
        ['pt', 'pr', 'pb', 'pl'].forEach((k: string) => {
            let checkPattern;
            let defaultValue = '';
            switch (k) {
                case 'pt': checkPattern = '^pt?-([1-6]|auto)$'; defaultValue = 'pt-3'; break;
                case 'pr': checkPattern = '^pr?-([1-6]|auto)$'; defaultValue = 'pt-5'; break;
                case 'pb': checkPattern = '^pb?-([1-6]|auto)$'; defaultValue = 'pt-3'; break;
                case 'pl': checkPattern = '^pl?-([1-6]|auto)$'; defaultValue = 'pt-5'; break;
            }
            if (checkPattern && classes.dialog?.content && ArrayRegexIncludes(classes.dialog.content as string[], new RegExp(checkPattern)) === -1) {
                classes.dialog.content?.push(defaultValue);
            }
        })
    }
    if (classes.dialog?.footer) {
        if (classes.dialog?.footer.wrap === undefined) {
            classes.dialog.footer.wrap = [];
        }
        if (ArrayRegexIncludes(classes.dialog.footer.wrap, /^p[trbl]?-([0-6]|auto)$/) === -1) {
            classes.dialog.footer.wrap.push('p-3');
        }
        if (
            ArrayRegexIncludes(
                classes.dialog.footer.wrap,
                /^is-justify-content-(flex-start|flex-end|center|space-between|space-around|space-evenly|start|end|left|right)$/
            ) === -1
        ) {
            classes.dialog.footer.wrap.push('is-justify-content-flex-end');
        }
    }
    if (classes.progressbar) {
        if (!classes.progressbar.includes('progress')) {
            classes.progressbar.push('progress');
        }
        const colorPattern = '^is-(' + COLOR_TYPES.join('|') + ')$';
        if (ArrayRegexIncludes(classes.progressbar, new RegExp(colorPattern)) === -1) {
            classes.progressbar.push('is-info');
        }
    }

    const datasetShown = convertDataSet(datasets.progressbar as CommonDataSet);

    return (
        <Fragment>
            <Dialog
                isActive={isActive}
                title={title}
                noFooter={true}
                onClose={onClose}
                buttonLabel='Close'
                classes={classes.dialog}
                attributes={attributes?.dialog}
                datasets={datasets.dialog}
            >
                <progress
                    className={classes.progressbar?.join(' ')}
                    value={value}
                    max={max}
                    {...attributes?.progressbar}
                    {...datasetShown}
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
