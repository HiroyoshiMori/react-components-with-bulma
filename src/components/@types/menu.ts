import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

/** Type definition for attributes of menu */
export type MenuAttributes = {
    list?: HTMLAttributes<HTMLUListElement>;
    label?: HTMLAttributes<HTMLParagraphElement>;
};
/** Type definition for datasets of menu */
export type MenuDatasets = {
    list?: CommonDataSet;
    label?: CommonDataSet;
};
/** Type definition for classes of menu */
export type MenuClasses = {
    wrap?: string[];
    label?: string[];
    list?: string[];
    item?: string[];
};
/** Type definition for fields of menu item */
export type MenuItemFields = {
    content: ReactNode;
    children?: MenuItemFields[];
    attributes?: HTMLAttributes<HTMLLIElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for fields of menu */
export type MenuFields = {
    label: ReactNode;
    list?: MenuItemFields[];
    attributes?: MenuAttributes;
    datasets?: MenuDatasets;
} & CommonStyleClasses;
/** Type definition for property of menu */
export type MenuProps = {
    menus: MenuFields[];
    classes?: MenuClasses;
    attributes?: HTMLAttributes<HTMLAreaElement>;
    datasets?: CommonDataSet;
};
