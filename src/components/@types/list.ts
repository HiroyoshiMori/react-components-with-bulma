import React, {
    HTMLAttributes,
} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

/** Type definition for fields of columns in List */
export type ListColumnFields = {
    value: any;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for classes of row of List */
export type ListRowClasses = {
    wrap?: string[];
    column?: string[];
};
/** Type definition for attributes of List */
export type ListAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    header?: HTMLAttributes<HTMLDivElement>;
};
/** Type definition for datasets of List */
export type ListDatasets = {
    wrap?: CommonDataSet;
    header?: CommonDataSet;
};
/** Type definition for classes of List */
export type ListClasses = {
    wrap?: string[];
    header?: ListRowClasses;
    detail?: ListRowClasses;
};
/** Type definition for property of list detail */
export type ListDetailProps = {
    item: ListColumnFields[];
    classes?: ListRowClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
/** Type definition for property of list header */
export type ListHeaderProps = {
    items: ListColumnFields[];
    classes?: ListRowClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
export type ListItemProps = {
    columns: ListColumnFields[],
    attributes?: HTMLAttributes<HTMLDivElement>,
    datasets?: CommonDataSet,
};
/** Type definition for property of list */
export type ListProps = {
    items: ListItemProps[];
    headers?: ListColumnFields[];
    itemElement?: React.ElementType<ListDetailProps>;
    headerElement?: React.ElementType<ListHeaderProps>;
    classes?: ListClasses;
    attributes?: ListAttributes;
    datasets?: ListDatasets;
};
