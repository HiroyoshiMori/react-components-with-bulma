import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

// Type definition of property for block
export type BlockProps = {
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
