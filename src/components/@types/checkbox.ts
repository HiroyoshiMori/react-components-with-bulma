import {
    ChangeEvent,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDataSet,
} from "./index";

/** Type definition for attributes of input[type=checkbox] */
export type CheckboxAttributes = {
    label?: HTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition for datasets of input[type=checkbox] */
export type CheckboxDatasets = {
    label?: CommonDataSet;
    input?: CommonDataSet;
};
/** Type definition for classes of input[type=checkbox] */
export type CheckboxClasses = {
    label?: string[];
    input?: string[];
};
/** Type definition for fields of input[type=checkbox] */
export type CheckboxFields = {
    name: string;
    key: string | number;
    value?: string | number;
    label?: ReactNode;
    disabled?: boolean;
};
/** Type definition for property of input[type=checkbox] */
export type CheckboxProps = {
    field: CheckboxFields;
    currentValues: (boolean | string | number)[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: CheckboxClasses;
    attributes?: CheckboxAttributes;
    datasets?: CheckboxDatasets;
};
