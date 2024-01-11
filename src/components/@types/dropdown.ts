import React, {AnchorHTMLAttributes, HTMLAttributes} from "react";
import {
    ButtonProps, CommonDataSet,
    CommonStyleClasses,
} from "./index";

// Type definition for attributes of dropdown
export type DropdownAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    trigger?: HTMLAttributes<HTMLDivElement>;
    menu?: HTMLAttributes<HTMLDivElement>;
    content?: HTMLAttributes<HTMLDivElement>;
    item?: HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>;
    divider?: HTMLAttributes<HTMLHeadingElement>;
};
// Type definition for datasets of dropdown
export type DropdownDatasets = {
    wrap?: Map<string, string>;
    trigger?: Map<string, string>;
    menu?: Map<string, string>;
    content?: Map<string, string>;
    item?: Map<string, string>;
    divider?: Map<string, string>;
};
// Type definition for classes of dropdown
export type DropdownClasses = {
    wrap?: string[];
    trigger?: string[];
    menu?: string[];
    content?: string[];
    item?: string[];
    divider?: string[];
};
// Type definition for property of dropdown content for item
export type DropdownItemProps = {
    tag: React.ElementType;
    children?: HTMLCollection;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    attributes?: HTMLAttributes<HTMLDivElement> | AnchorHTMLAttributes<HTMLAnchorElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
// Type definition for property of dropdown content for divider
export type DropdownDividerProps = {
    isDivider: true;
    attributes?: HTMLAttributes<HTMLHeadingElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
// Type definition for property of dropdown item
export type DropdownContentProps = DropdownItemProps | DropdownDividerProps;
// Type definition for property of dropdown
export type DropdownProps = {
    menuId?: string;
    trigger: ButtonProps;
    items: DropdownContentProps[];
    classes?: DropdownClasses;
    attributes?: DropdownAttributes;
    datasets?: DropdownDatasets;
};
