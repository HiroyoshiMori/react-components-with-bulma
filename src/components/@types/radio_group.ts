import {ChangeEvent} from "react";
import {
    RadioAttributes,
    RadioClasses,
    RadioDatasets,
    RadioFields,
} from "./input";

/** Type definition for property of radio group fields */
export type RadioGroupFieldsProps = RadioFields & {
    classes?: RadioClasses;
    attributes?: RadioAttributes;
    datasets?: RadioDatasets;
};
/** Type definition for property of radio group */
export type RadioGroupProps = {
    name: string;
    fields: RadioGroupFieldsProps[];
    currentValue: boolean | string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioClasses,
};
