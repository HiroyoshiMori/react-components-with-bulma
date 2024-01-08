import {ChangeEvent} from "react";
import {
    CheckboxAttributes,
    CheckboxClasses,
    CheckboxDatasets,
    CheckboxFields,
} from "./input";

/** Type definition for property of radio group fields */
export type CheckboxGroupFieldsProps = CheckboxFields & {
    classes?: CheckboxClasses;
    attributes?: CheckboxAttributes;
    datasets?: CheckboxDatasets;
};
/** Type definition for property of radio group */
export type CheckboxGroupProps = {
    name: string;
    fields: CheckboxGroupFieldsProps[];
    currentValues?: (boolean | string | number)[];
    prefix?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    classes?: CheckboxClasses,
};
