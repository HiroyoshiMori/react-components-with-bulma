import {CommonDataSet, CommonStyleClasses} from "./index";
import {HTMLAttributes} from "react";

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
    wrap?: HTMLAttributes<HTMLDivElement>,
    header?: HTMLAttributes<HTMLDivElement>,
};
/** Type definition for datasets of List */
export type ListDatasets = {
    wrap?: CommonDataSet,
    header?: CommonDataSet,
};
/** Type definition for classes of List */
export type ListClasses = {
    wrap?: string[];
    headers?: ListRowClasses;
    detail?: ListRowClasses;
};
/** Type definition for property of list detail */
export type ListDetailProps = {
    item: ListColumnFields[];
} & CommonStyleClasses;
/** Type definition for property of list header */
export type ListHeaderProps = {
    items: ListColumnFields[];
    classes?: ListRowClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};
/** Type definition for property of list */
export type ListProps = {
    items: {
        data: {
            columns: ListColumnFields[],
            attributes?: HTMLAttributes<HTMLDivElement>,
            datasets?: CommonDataSet,
        }[],
        type?: string,
    };
    headers?: ListColumnFields[];
    classes?: ListClasses;
    attributes?: ListAttributes;
    datasets?: ListDatasets;
};
