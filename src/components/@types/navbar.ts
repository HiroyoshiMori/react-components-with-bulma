import React, {
    ReactNode,
    AnchorHTMLAttributes,
    HTMLAttributes,
} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

/** Type definition for attributes of Navbar */
export type NavbarAttributes = {
    wrap?: HTMLAttributes<HTMLElement>;
    brand?: HTMLAttributes<HTMLDivElement>;
    burger?: AnchorHTMLAttributes<HTMLAnchorElement>;
    menu?: HTMLAttributes<HTMLDivElement>;
    menuStart?: HTMLAttributes<HTMLDivElement>;
    menuEnd?: HTMLAttributes<HTMLDivElement>;
};
/** Type definition for datasets of Navbar */
export type NavbarDatasets = {
    wrap?: CommonDataSet;
    brand?: CommonDataSet;
    burger?: CommonDataSet;
    menu?: CommonDataSet;
    menuStart?: CommonDataSet;
    menuEnd?: CommonDataSet;
}
/** Type definition for classes of Navbar */
export type NavbarClasses = {
    wrap?: string[];
    brand?: string[];
    burger?: string[];
    menu?: string[];
    menuStart?: string[];
    menuEnd?: string[];
    link?: string[];
    item?: string[];
    dropdown?: string[];
    divider?: string[];
};
/** Type definition for fields of navbar items */
export type NavbarItemFields = {
    label: ReactNode;
    isDivider?: boolean;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: NavbarItemFields[];
    attributes?: HTMLAttributes<HTMLDivElement | HTMLHeadingElement | HTMLAnchorElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of navbar */
export type NavbarProps = {
    ariaLabel: string;
    menuId: string;
    menus: {
        start?: NavbarItemFields[],
        end?: NavbarItemFields[],
    };
    brand?: {
        item: ReactNode,
        href?: string,
    };
    fixed?: "top" | "bottom";
    classes?: NavbarClasses;
    attributes?: NavbarAttributes;
    datasets?: NavbarDatasets;
};
