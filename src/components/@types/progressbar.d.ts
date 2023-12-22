import React, {HTMLAttributes} from "react";
import {CommonDataSet} from "./index";
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
/** Type definition for property of progressbar */
export type ProgressBarProps = {
    isActive: boolean;
    title: string;
    value: number;
    max: number;
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    attributes?: ProgressBarAttributes;
    datasets?: ProgressBarDatasets;
};
