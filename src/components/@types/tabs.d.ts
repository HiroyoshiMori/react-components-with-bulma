import {HTMLAttributes, ReactNode} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
    PositionTypes,
} from "./index";

/** Type definition for classes of tabs */
export type TabsClasses = {
    wrap?: string[];
    item?: string[];
};
/** Type definition for fields of tab item */
export type TabsItemFields = {
    label: ReactNode;
    isActive?: boolean;
    href?: string;
    attributes?: HTMLAttributes<HTMLLIElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of tabs */
export type TabsProps = {
    items: TabsItemFields[];
    position?: PositionTypes;
    classes?: TabsClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
