import React, {
    ChangeEvent,
    HTMLAttributes,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
} from "react";
import {
    CheckboxClasses, CheckboxProps,
    ColorTypes,
    CommonDataSet,
    IconsProps,
    InputButtonTypes, InputOtherTypes, InputTextTypes,
    LabelProps,
    RadioClasses, RadioGroupFieldsProps,
    SelectAttributes, SelectClasses, SelectDatasets, SelectProps,
    SizeTypes,
    StateTypes,
    SubmitButtonFields, SubmitImageFields,
    TextareaProps,
} from "./index";

/** Type definition for attributes of input */
export type InputAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    control?: HTMLAttributes<HTMLDivElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition for datasets of input */
export type InputDatasets = {
    wrap?: CommonDataSet;
    control?: CommonDataSet;
    input?: CommonDataSet;
};
/** Type definition for classes of input */
export type InputClasses = {
    wrap?: string[];
    control?: string[];
};
/** Type definition for classes of input[type=text,password,email,tel,number,search,url] */
export type InputTextClasses = InputClasses & {
    input?: string[];
};
/** Type definition for classes of input[type=submit,button,image] */
export type InputButtonClasses = InputClasses & {
    input?: string[];
};
/** Type definition for classes of input[type=others] */
export type InputOtherClasses = InputClasses & {
    input?: string[];
};
/** Type definition for additional properties of input[type=text,password,email,tel,number,search,url] */
export type InputTextProps = {
    type: InputTextTypes;
    name: string;
    id?: string;
    value: boolean | string | number;
    label?: LabelProps;
    placeholder?: string;
    iconLeft?: IconsProps;
    iconRight?: IconsProps;
    prefix?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    colorType?: ColorTypes;
    state?: StateTypes;
    size?: SizeTypes;
    noDivWrap?: boolean;
    classes?: InputTextClasses;
    attributes?: InputAttributes;
    datasets?: InputDatasets;
};
/** Type definition for additional properties of input[type=radio] */
export type InputRadioProps = {
    type: 'radio';
    name: string;
    items: RadioGroupFieldsProps[];
    currentValue: boolean | string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: LabelProps;
    prefix?: string;
    noDivWrap?: boolean;
    classes?: InputClasses & RadioClasses;
    attributes?: InputAttributes;
    datasets?: InputDatasets;
};
/** Type definition for additional properties of input[type=checkbox] */
export type InputCheckboxProps = {
    type: 'checkbox';
    name: string;
    items: CheckboxProps[];
    currentValues: (boolean | string | number)[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: LabelProps;
    prefix?: string;
    noDivWrap?: boolean;
    classes?: InputClasses & CheckboxClasses;
    attributes?: InputAttributes;
    datasets?: InputDatasets;
};
/** Type definition for additional properties of input[type=submit,button,image] */
export type InputButtonProps = {
    type: InputButtonTypes;
    name: string;
    id?: string;
    additionalProps: SubmitButtonFields | SubmitImageFields;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    prefix?: string;
    disabled?: boolean;
    noDivWrap?: boolean;
    classes?: InputButtonClasses,
    attributes?: InputAttributes;
    datasets?: InputDatasets;
};
/** Type definition for additional properties of input[type=others] */
export type InputOtherProps = {
    type: InputOtherTypes;
    name: string;
    id?: string;
    value?: string | number | readonly string[];
    prefix?: string;
    label?: LabelProps;
    disabled?: boolean;
    noDivWrap?: boolean;
    classes?: InputOtherClasses,
    attributes?: InputAttributes;
    datasets?: InputDatasets;
};
/** Type definition for property of input */
export type InputProps = InputTextProps | InputRadioProps | InputCheckboxProps | InputButtonProps;

/** Type definition for attributes of form textarea */
export type TextareaAttributes = Omit<InputAttributes, 'input'> & {
    textarea?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}
/** Type definition for classes of form textarea */
export type TextareaDatasets = Omit<InputDatasets, 'input'> & {
    textarea?: Map<string, string>;
}
/** Type definition for classes of form textarea */
export type TextareaClasses = Omit<InputClasses, 'input'> & {
    textarea?: string[];
}
/** Type definition for property of form textarea */
export type FormTextareaProps = Omit<TextareaProps, "classes" | "attributes" | "datasets"> & {
    prefix?: string;
    label?: LabelProps;
    noDivWrap?: boolean;
    classes?: TextareaClasses;
    attributes?: TextareaAttributes;
    datasets?: TextareaDatasets;
};

/** Type definition for attributes of form select */
export type FormSelectAttributes = SelectAttributes & {
    wrap?: HTMLAttributes<HTMLDivElement>;
    control?: HTMLAttributes<HTMLDivElement>;
};
/** Type definition for datasets of form select */
export type FormSelectDatasets = SelectDatasets & {
    wrap?: Map<string, string>;
    control?: Map<string, string>;
};
/** Type definition for classes of form select */
export type FormSelectClasses = SelectClasses & {
    wrap?: string[];
    control?: string[];
}
/** Type definition for property of form select */
export type FormSelectProps = Omit<SelectProps, "classes" | "attributes" | "datasets"> & {
    prefix?: string;
    label?: LabelProps;
    noDivWrap?: boolean;
    classes?: FormSelectClasses;
    attributes?: FormSelectAttributes;
    datasets?: FormSelectDatasets;
};
