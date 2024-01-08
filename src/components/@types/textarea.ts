import {TextareaHTMLAttributes} from "react";
import {ColorTypes, SizeTypes, StateTypes} from "./index";

/** Type definition of property for textarea */
export type TextareaProps = {
    name: string;
    id?: string;
    children?: string;
    cols?: number;
    rows?: number;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    wordWrap?: 'hard' | 'soft' | 'off';
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    colorType?: ColorTypes;
    size?: SizeTypes;
    state?: StateTypes;
    classes?: string[];
    attributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    datasets?: Map<string, string>;
};
