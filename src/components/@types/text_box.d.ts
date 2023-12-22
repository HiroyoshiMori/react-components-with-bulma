import {ChangeEvent, InputHTMLAttributes} from "react";
import {ColorTypes, CommonDataSet, CommonStyleClasses, SizeTypes, StateTypes} from "./index";

/** Type definition for property of input */
export type InputProps = {
    fieldName: string;
    value: string|number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    colorType?: ColorTypes;
    state?: StateTypes;
    size?: SizeTypes;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
