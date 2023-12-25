import React, {HTMLAttributes, ReactNode} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
    PositionTypes,
    SeparatorsTypes,
    SizeTypes
} from "./index";

/** Type definition for classes of breadcrumb */
export type BreadcrumbClasses = {
    wrap?: string[];
    item?: string[];
};
/** Type definition for fields of breadcrumb */
export type BreadcrumbItemFields = {
    label: ReactNode;
    isActive?: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    attributes?: HTMLAttributes<HTMLLIElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of breadcrumb */
export type BreadcrumbProps = {
    items: BreadcrumbItemFields[]
    position?: PositionTypes,
    separator?: SeparatorsTypes,
    size?: SizeTypes,
    classes?: BreadcrumbClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
