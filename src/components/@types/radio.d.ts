import {ChangeEvent, HTMLAttributes, InputHTMLAttributes, ReactNode} from "react";
import {
    CommonDataSet,
} from "./index";

/** Type definition for attributes of Radio */
export type RadioAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    label?: HTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition for datasets of Radio */
export type RadioDatasets = {
    wrap?: CommonDataSet;
    label?: CommonDataSet;
    input?: CommonDataSet;
};
/** Type definition for classes of Radio */
export type RadioClasses = {
    wrap?: string[];
    label?: string[];
    input?: string[];
};
/** Type definition for classes of RadioGroup */
export type RadioGroupClasses = {
    group?: string[];
    radio?: RadioClasses,
};
/** Type definition for fields of RadioGroup */
export type RadioGroupFields = {
    key: string | number;
    value?: string | number;
    label?: ReactNode;
    disabled?: boolean;
    attributes?: RadioAttributes;
    datasets?: RadioDatasets;
};
/** Type definition for property of radio */
export type RadioProps = {
    field: { name: string } & RadioGroupFields;
    currentValue: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioClasses;
    attributes?: RadioAttributes;
    datasets?: RadioDatasets;
};
/** Type definition for property of radio group */
export type RadioGroupProps = {
    fieldName: string;
    fields: RadioGroupFields[];
    currentValue: string|number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioGroupClasses,
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
