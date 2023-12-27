import React, {HTMLAttributes} from "react";
import {CommonDataSet, DialogClasses} from "./index";
import {
    DialogAttributes,
    DialogDatasets
} from "./dialog";

/** Type definition for attributes of Progressbar */
export type ProgressBarAttributes = {
    dialog?: DialogAttributes,
    progressbar?: HTMLAttributes<HTMLElement>;
}
/** Type definition for datasets of Progressbar */
export type ProgressBarDatasets = {
    dialog?: DialogDatasets,
    progressbar?: CommonDataSet;
}
/** Type definition for classes of Progressbar */
export type ProgressBarClasses = {
    dialog?: DialogClasses,
    progressbar?: string[];
}
/** Type definition for property of progressbar */
export type ProgressBarProps = {
    isActive: boolean;
    title: string;
    value: number;
    max: number;
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: ProgressBarClasses;
    attributes?: ProgressBarAttributes;
    datasets?: ProgressBarDatasets;
};
