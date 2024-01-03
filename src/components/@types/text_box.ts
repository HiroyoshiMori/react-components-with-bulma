import {
    ChangeEvent,
    InputHTMLAttributes,
} from "react";
import {
    ColorTypes,
    CommonDataSet,
    CommonStyleClasses, InputTextTypes,
    SizeTypes,
    StateTypes,
} from "./index";

/** Type definition for property of input */
export type TextBoxProps = {
    fieldName: string;
    fieldType?: InputTextTypes;
    value: boolean | string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    colorType?: ColorTypes;
    state?: StateTypes;
    size?: SizeTypes;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
