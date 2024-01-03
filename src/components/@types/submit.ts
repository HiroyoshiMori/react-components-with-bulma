import React, {InputHTMLAttributes} from "react";
import {
    ColorTypes,
    CommonStyleClasses,
    SizeTypes,
} from "./index";

/** Type definition of fields for input[type=submit] */
export type SubmitButtonFields = {
    type: 'submit' | 'button';
    value?: string | number;
    colorType?: ColorTypes;
    colorLight?: boolean;
    size?: SizeTypes;
    noDefaultClasses?: boolean;
};
/** Type definition of fields for input[type=image] */
export type SubmitImageFields = {
    type: 'image';
    src: string;
    alt?: string;
};
/** Type definition of property for input[type=submit] */
export type SubmitProps = {
    name: string;
    id?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    additionalProps: SubmitButtonFields | SubmitImageFields;
    prefix?: string;
    disabled?: boolean;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    datasets?: Map<string, string>;
} & CommonStyleClasses;
