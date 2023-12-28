import React, {
    ReactNode,
    ButtonHTMLAttributes,
    HTMLAttributes,
} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {
    CommonDataSet,
    CommonStyleClasses,
} from "./index";

/** Type definition for attributes of card header */
export type CardHeaderAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    title?: HTMLAttributes<HTMLParagraphElement>;
    button?: ButtonHTMLAttributes<HTMLButtonElement>;
    span?: HTMLAttributes<HTMLSpanElement>;
    icon?: HTMLAttributes<HTMLElement>;
};
/** Type definition for attributes of card image */
export type CardImageAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    figure?: HTMLAttributes<HTMLElement>;
    image?: HTMLAttributes<HTMLImageElement>;
};
/** Type definition for attributes of card content */
export type CardContentAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    content?: HTMLAttributes<HTMLDivElement>;
};
/** Type definition for datasets of card header */
export type CardHeaderDatasets = {
    wrap?: CommonDataSet;
    title?: CommonDataSet;
    button?: CommonDataSet;
    span?: CommonDataSet;
    icon?: CommonDataSet;
};
/** Type definition for datasets of card image */
export type CardImageDatasets = {
    wrap?: CommonDataSet;
    figure?: CommonDataSet;
    image?: CommonDataSet;
};
/** Type definition for datasets of card content */
export type CardContentDatasets = {
    wrap?: CommonDataSet;
    content?: CommonDataSet;
};
/** Type definition for classes of card header */
export type CardHeaderClasses = {
    wrap?: string[];
    title?: string[];
    button?: string[];
    span?: string[];
    icon?: string[];
};
/** Type definition for classes of card image */
export type CardImageClasses = {
    wrap?: string[];
    figure?: string[];
    image?: string[];
};
/** Type definition for classes of card content */
export type CardContentClasses = {
    wrap?: string[];
    content?: string[];
};
/** Type definition for property of card header */
export type CardHeaderProps = {
    title: ReactNode;
    buttonIcon?: IconDefinition;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: CardHeaderClasses;
    attributes?: CardHeaderAttributes;
    datasets?: CardHeaderDatasets;
};
/** Type definition for property of card image */
export type CardImageProps = {
    src: string;
    alt?: string;
    classes?: CardImageClasses;
    attributes?: CardImageAttributes;
    datasets?: CardImageDatasets;
};
/** Type definition for property of card content */
export type CardContentProps = {
    children?: ReactNode;
    classes?: CardContentClasses;
    attributes?: CardContentAttributes;
    datasets?: CardContentDatasets;
};
/** Type definition for property of card footer */
export type CardFooterProps = {
    items: ReactNode[],
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of card */
export type CardProps = {
    header?: CardHeaderProps;
    image?: CardImageProps;
    content?: CardContentProps;
    footer?: CardFooterProps;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
