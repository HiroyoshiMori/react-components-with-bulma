import {ChangeEvent} from "react";
import {
    CheckboxAttributes,
    CheckboxClasses,
    CheckboxDatasets,
    CheckboxFields,
} from "./input";

/** Type definition for property of radio group fields */
export type CheckboxGroupFieldsProps = {
    field: CheckboxFields,
    classes?: CheckboxClasses;
    attributes?: CheckboxAttributes;
    datasets?: CheckboxDatasets;
};
/** Type definition for property of radio group */
export type CheckboxGroupProps = {
    fieldName: string;
    fields: CheckboxGroupFieldsProps[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    currentValues?: (boolean | string | number)[];
    prefix?: string;
    classes?: CheckboxClasses,
};
