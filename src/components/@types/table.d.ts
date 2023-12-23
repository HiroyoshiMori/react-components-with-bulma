import {ColgroupHTMLAttributes, ColHTMLAttributes, HTMLAttributes, ReactNode, TableHTMLAttributes} from "react";
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
/** Type definition for classes of colgroups */
export type ColGroupCLasses = {
    group?: string[];
    col?: string[];
}
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
/** Type definition for property of table caption */
export type CaptionProps = {
    attributes?: HTMLAttributes<HTMLTableCaptionElement>;
    datasets?: CommonDataSet;
    children?: ReactNode;
} & CommonStyleClasses;
/** Type definition for property of colgroup */
export type ColProps = {
    span?: number,
    attributes?: ColHTMLAttributes<HTMLTableColElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of colgroup */
export type ColGroupProps = {
    classes?: ColGroupCLasses;
    attributes?: ColgroupHTMLAttributes<HTMLTableColElement>;
    datasets?: CommonAttributes;
} & ({cols: ColProps[], span: undefined} | {cols: [], span: number});
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
    caption?: CaptionProps;
    colgroup?: ColGroupProps;
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
