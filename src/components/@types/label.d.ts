import {CommonDataSet, CommonStyleClasses} from "./index";
import {LabelHTMLAttributes, ReactNode} from "react";

/** Type definition for fields of label */
export type LabelFields = {
    label: string;
    htmlFor?: string;
    attributes?: LabelHTMLAttributes<HTMLLabelElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of label */
export type LabelProps =
    LabelFields & Partial<{children: ReactNode}> |
    Partial<LabelFields> & {children: ReactNode};
