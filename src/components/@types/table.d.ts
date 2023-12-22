import {HTMLAttributes, ReactNode, TableHTMLAttributes} from "react";
import {CommonAttributes, CommonDataSet, CommonStyleClasses} from "./index";

/** Type definition for attributes of table */
export type TableAttributes = {
    wrap?: TableHTMLAttributes<HTMLTableElement>;
    container?: HTMLAttributes<HTMLDivElement>;
};
/** Type definition for datasets of table */
export type TableDatasets = {
    wrap?: CommonDataSet;
    container?: CommonDataSet;
};
/** Type definition for classes of table header */
export type TableHeaderClasses = {
    wrap?: string[];
    row?: string[];
};
/** Type definition for classes of table body */
export type TableBodyClasses = TableHeaderClasses;
/** Type definition for classes of table footer */
export type TableFooterClasses = TableHeaderClasses;
/** Type definition for classes of table */
export type TableClasses = {
    wrap?: string[];
    container?: string[];
    headers?: string[];
    footers?: string[];
};
/** Type definition for property of table cell */
export type TableCellProps = {
    value: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    isHeaderCell?: boolean;
    attributes?: HTMLAttributes<HTMLTableDataCellElement | HTMLTableHeaderCellElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of table row */
export type TableRowProps = {
    values: TableCellProps[];
    attributes?: HTMLAttributes<HTMLTableRowElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of table header */
export type TableHeaderProps = {
    values: TableRowProps[];
    classes?: TableHeaderClasses;
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
    datasets?: CommonDataSet;
};
/** Type definition for property of table body */
export type TableBodyProps = {
    values: TableRowProps[];
    classes?: TableBodyClasses;
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
    datasets?: CommonDataSet;
};
/** Type definition for property of table footer */
export type TableFooterProps = {
    values: TableRowProps[];
    classes?: TableFooterClasses;
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
    datasets?: CommonDataSet;
};
/** Type definition for property of table */
export type TableProps = {
    body: TableBodyProps;
    headers?: TableHeaderProps;
    footers?: TableFooterProps;
    isBordered?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
    isHoverable?: boolean;
    isFullWidth?: boolean;
    inTableContainer?: boolean;
    classes?: TableClasses;
    attributes?: TableAttributes;
    datasets?: TableDatasets;
};
