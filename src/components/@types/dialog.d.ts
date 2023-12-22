import React, {ReactNode} from "react";
import {CommonDataSet} from "./index";

/** Type definition for attributes of header of Dialog */
export type DialogHeaderAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    title?: HTMLAttributes<HTMLDivElement>;
    button?: HTMLAttributes<HTMLButtonElement>;
};
/** Type definition for attributes of footer of Dialog */
export type DialogFooterAttributes = {
    wrap?: HTMLAttributes<HTMLElement>;
    button?: HTMLAttributes<HTMLButtonElement>;
};
/** Type definition for attributes of Dialog */
export type DialogAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    card?: HTMLAttributes<HTMLDivElement>;
    header?: DialogHeaderAttributes;
    content?: HTMLAttributes<HTMLElement>;
    footer?: DialogFooterAttributes;
};
/** Type definition for attributes of header of Dialog */
export type DialogHeaderDatasets = {
    wrap?: CommonDataSet;
    title?: CommonDataSet;
    button?: CommonDataSet;
};
/** Type definition for datasets of footer of Dialog */
export type DialogFooterDatasets = {
    wrap?: CommonDataSet;
    button?: CommonDataSet;
};
/** Type definition for datasets of Dialog */
export type DialogDatasets = {
    wrap?: CommonDataSet;
    card?: CommonDataSet;
    header?: DialogHeaderDatasets;
    content?: CommonDataSet;
    footer?: DialogFooterDatasets;
};
/** Type definition for classes of header of Dialog */
export type DialogHeaderClasses = {
    wrap?: string[];
    title?: string[];
};
/** Type definition for classes of footer of Dialog */
export type DialogFooterClasses = {
    wrap?: string[];
    button?: string[];
};
/** Type definition for classes of Dialog */
export type DialogClasses = {
    wrap?: string[];
    header?: DialogHeaderClasses;
    content?: string[];
    footer?: DialogFooterClasses;
}
/** Type definition for property of dialog box */
export type DialogBoxProps = {
    isActive: boolean;
    title: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    noFooter?: boolean;
    buttonLabel?: ReactNode;
    classes?: DialogClasses;
    attributes?: DialogAttributes;
    datasets?: DialogDatasets;
    children?: ReactNode;
};
/** Type definition for property of dialog box header */
export type DialogHeaderProps = {
    title: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: DialogHeaderClasses;
    attributes?: DialogHeaderAttributes;
    datasets?: DialogHeaderDatasets;
};
/** Type definition for property of dialog box footer */
export type DialogFooterProps = {
    buttonLabel: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: DialogFooterClasses;
    attributes?: DialogFooterAttributes;
    datasets?: DialogFooterDatasets;
};
