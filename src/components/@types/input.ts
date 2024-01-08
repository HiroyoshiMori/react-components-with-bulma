import React, {
    ChangeEvent,
    HTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    ReactNode,
} from "react";
import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {
    ColorTypes,
    CommonDataSet,
    CommonStyleClasses,
    InputTextTypes,
    PositionTypes,
    SizeTypes,
    StateTypes,
} from "./index";

// ----------------------------------------------------------------------
// Text Box
// ----------------------------------------------------------------------
/** Type definition for property of input */
export type TextFieldProps = {
    name: string;
    id?: string;
    type?: InputTextTypes;
    value: boolean | string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    colorType?: ColorTypes;
    state?: StateTypes;
    size?: SizeTypes;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

// ----------------------------------------------------------------------
// Check Box
// ----------------------------------------------------------------------
/** Type definition for attributes of input[type=checkbox] */
export type CheckboxAttributes = {
    label?: HTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition for datasets of input[type=checkbox] */
export type CheckboxDatasets = {
    label?: CommonDataSet;
    input?: CommonDataSet;
};
/** Type definition for classes of input[type=checkbox] */
export type CheckboxClasses = {
    label?: string[];
    input?: string[];
};
/** Type definition for fields of input[type=checkbox] */
export type CheckboxFields = {
    name: string;
    id: string;
    value?: boolean | string | number;
    label?: ReactNode;
    disabled?: boolean;
};
/** Type definition for property of input[type=checkbox] */
export type CheckboxProps = CheckboxFields & {
    currentValues: (boolean | string | number)[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: CheckboxClasses;
    attributes?: CheckboxAttributes;
    datasets?: CheckboxDatasets;
};

// ----------------------------------------------------------------------
// Radio
// ----------------------------------------------------------------------
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
    id: string;
    value?: boolean | string | number;
    label?: ReactNode;
    disabled?: boolean;
};
/** Type definition for property of radio */
export type RadioProps = RadioFields & {
    currentValue: boolean | string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    prefix?: string;
    classes?: RadioClasses;
    attributes?: RadioAttributes;
    datasets?: RadioDatasets;
};

// ----------------------------------------------------------------------
// File
// ----------------------------------------------------------------------
/** Type definition for additional attributes of input[type=file] */
export type InputFileAttributes = {
    div?: HTMLAttributes<HTMLDivElement>;
    label?: LabelHTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
    cta?: HTMLAttributes<HTMLSpanElement>;
    icon?: HTMLAttributes<HTMLSpanElement>;
    labelSpan?: HTMLAttributes<HTMLSpanElement>;
    fileNameLabel?: HTMLAttributes<HTMLSpanElement>;
};
/** Type definition for additional datasets of input[type=file] */
export type InputFileDatasets = {
    div?: Map<string, string>;
    label?: Map<string, string>;
    input?: Map<string, string>;
    cta?: Map<string, string>;
    icon?: Map<string, string>;
    labelSpan?: Map<string, string>;
    fileNameLabel?: Map<string, string>;
};
/** Type definition for additional classes of input[type=file] */
export type InputFileClasses = {
    div?: string[];
    label?: string[];
    input?: string[];
    cta?: string[];
    icon?: string[];
    labelSpan?: string[];
    fileNameLabel?: string[];
};
/** Type definition for additional properties of input[type=file] */
export type InputFileProps = {
    type: 'file';
    name: string;
    buttonLabel: string;
    id?: string;
    icon?: FontAwesomeIconProps;
    isBoxed?: boolean;
    fileNameLabel?: string;
    fileNamePositionLeft?: boolean;
    fileNameExpanded?: boolean;
    colorType?: ColorTypes;
    size?: SizeTypes;
    alignment?: PositionTypes;
    classes?: InputFileClasses;
    attributes?: InputFileAttributes;
    datasets?: InputFileDatasets;
};

// ----------------------------------------------------------------------
// Submit/Button/Image
// ----------------------------------------------------------------------
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
