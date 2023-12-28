import {
    HTMLAttributes,
} from "react";
import {
    ImageSizesTypes,
} from "./index";

// Type definition of attributes for image
export type ImageAttributes = {
    wrap?: HTMLAttributes<HTMLElement>;
    image?: HTMLAttributes<HTMLImageElement>;
};
// Type definition of datasets for image
export type ImageDatasets = {
    wrap?: Map<string, string>;
    image?: Map<string, string>;
};
// Type definition of classes for image
export type ImageClasses = {
    wrap?: string[];
    image?: string[];
};
// Type definition of property for Image
export type ImageProps = {
    src: string;
    alt?: string;
    imageSize?: ImageSizesTypes;
    classes?: ImageClasses;
    attributes?: ImageAttributes;
    datasets?: ImageDatasets;
};
