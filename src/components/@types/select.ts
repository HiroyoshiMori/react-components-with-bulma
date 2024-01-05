import React, {HTMLAttributes, OptgroupHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes} from "react";
import {ColorTypes, SizeTypes, StateTypes} from "./index";
import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

/** Type definition of attributes for select */
export type SelectAttributes = {
    div?: HTMLAttributes<HTMLDivElement>;
    select?: SelectHTMLAttributes<HTMLSelectElement>;
};
/** Type definition of datasets for select */
export type SelectDatasets = {
    div?: Map<string, string>;
    select?: Map<string, string>;
};
/** Type definition of classes for select */
export type SelectClasses = {
    div?: string[];
    select?: string[];
    optgroup?: string[];
    option?: string[];
};
/** Type definition of property for select */
export type SelectProps = {
    name: string;
    id?: string;
    options: (OptionProps|OptGroupProps)[];
    currentValues?: string[];
    multiple?: boolean;
    size?: number;
    colorType?: ColorTypes;
    state?: StateTypes;
    fontSize?: SizeTypes;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    classes?: SelectClasses;
    attributes?: SelectAttributes;
    datasets?: SelectDatasets;
};
/** Type definition of property for option */
export type OptionProps = {
    value: string;
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    classes?: string[];
    attributes?: OptionHTMLAttributes<HTMLOptionElement>;
    datasets?: Map<string, string>;
};
/** Type definition of attributes for optgroup */
export type OptGroupClasses = {
    optgroup?: string[];
    option?: string[];
};
/** Type definition of property for optgroup */
export type OptGroupProps = {
    isOptGroup: true,
    label: string;
    options: OptionProps[];
    currentValues?: string[];
    disabled?: boolean;
    classes?: OptGroupClasses;
    attributes?: OptgroupHTMLAttributes<HTMLOptGroupElement>;
    datasets?: Map<string, string>;
};
