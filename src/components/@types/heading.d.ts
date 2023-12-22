import {HTMLAttributes, ReactNode} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

/** Type definition for fields of heading */
export type HeadingFields = {
    label: string;
    size?: number;
    attributes?: HTMLAttributes<HTMLHeadingElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of heading */
export type HeadingProps =
    HeadingFields & Partial<{children: ReactNode}> |
    Partial<HeadingFields> & {children: ReactNode};
