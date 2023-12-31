// Type definition of property of panel header
import React, {
    ReactNode,
    HTMLAttributes,
} from "react";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

export type PanelHeaderProps = {
    children?: ReactNode;
    tag?: React.ElementType;
    attributes?: HTMLAttributes<HTMLElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
// Type definition of property of panel tab
export type PanelTabProps = {
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
// Type definition of property of panel tabs
export type PanelTabsProps = {
    items: PanelTabProps[];
    tag?: React.ElementType;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
// Type definition of property of panel block
export type PanelBlockProps = {
    children?: ReactNode;
    isActive?: boolean;
    tag?: React.ElementType;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    attributes?: HTMLAttributes<HTMLElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
// Type definition of property of panel
export type PanelProps = {
    header: PanelHeaderProps;
    items: (PanelTabsProps | PanelBlockProps)[];
    attributes?: HTMLAttributes<HTMLElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
