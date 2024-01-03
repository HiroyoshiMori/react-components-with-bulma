import {
    ReactNode,
    HTMLAttributes,
    InputHTMLAttributes,
    ChangeEvent,
} from "react";
import {
    CommonDataSet,
} from "./index";

/** Type definition for attributes of Radio */
export type RadioAttributes = {
    label?: HTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition for datasets of Radio */
export type RadioDatasets = {
    label?: CommonDataSet;
    input?: CommonDataSet;
};
/** Type definition for classes of Radio */
export type RadioClasses = {
    label?: string[];
    input?: string[];
};
/** Type definition for fields of radio */
export type RadioFields = {
    name: string;
    key: string | number;
    value?: boolean | string | number;
    label?: ReactNode;
    disabled?: boolean;
};
/** Type definition for property of radio */
export type RadioProps = {
    field: RadioFields;
    currentValue: boolean | string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioClasses;
    attributes?: RadioAttributes;
    datasets?: RadioDatasets;
};
