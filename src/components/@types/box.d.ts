import {HTMLAttributes, ReactNode} from "react";
import {CommonDataSet} from "./index";

export type BoxProps = {
    children?: ReactNode;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
