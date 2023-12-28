import {ReactNode} from "react";
import {
    CommonStyleClasses,
} from "./index";

/** Type definition for classes of dropdown */
export type DropdownClasses = {
    wrap?: string[];
    trigger?: string[];
    menu?: string[];
    content?: string[];
    item?: string[];
    divider?: string[];
};
/** Type definition for fields of dropdown item */
export type DropdownItemFields = ({
    label: ReactNode;
    href?: string;
} | { isDivider: boolean }) & CommonStyleClasses;
