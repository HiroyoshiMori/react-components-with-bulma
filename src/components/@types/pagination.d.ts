import React, {HTMLAttributes, ReactNode} from "react";
import {
    CommonDataSet,
    PositionTypes,
    SizeTypes
} from "./index";

/** Type definition for labels of pagination */
export type PaginationLabels = {
    previous?: ReactNode;
    next?: ReactNode;
    ellipsis?: ReactNode;
};
/** Type definition for attributes of pagination */
export type PaginationAttributes = {
    wrap?: HTMLAttributes<HTMLAreaElement>;
    list?: HTMLAttributes<HTMLUListElement>;
};
/** Type definition for datasets of pagination */
export type PaginationDatasets = {
    wrap?: CommonDataSet;
    list?: CommonDataSet;
};
/** Type definition for classes of pagination */
export type PaginationClasses = {
    wrap?: string[];
    previous?: string[];
    next?: string[];
    list?: string[];
    link?: string[];
    ellipsis?: string[];
}
/** Type definition for property of pagination */
export type PaginationProps = {
    itemTotal: number;
    current?: number;
    labels?: PaginationLabels;
    style?: "rounded";
    position?: PositionTypes;
    size?: SizeTypes,
    classes?: PaginationClasses;
    attributes?: PaginationAttributes;
    datasets?: PaginationDatasets;
} & ({
    link: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>, page: number) => void;
} | {
    link?: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, page: number) => void;
});
