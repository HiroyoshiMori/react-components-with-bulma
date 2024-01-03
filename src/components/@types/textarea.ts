import {TextareaHTMLAttributes} from "react";

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
    wrap?: 'hard' | 'soft' | 'off';
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    classes?: string[];
    attributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    datasets?: Map<string, string>;
};
