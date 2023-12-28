import React, {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    ColorTypes,
    CommonDataSet,
    CommonStyleClasses,
    SizeTypes,
} from "./index";

/** Type definition for property of tag modifier */
export type TagCombinationProps = {
    onClick?: (e: React.MouseEvent) => void;
    attributes?: HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for property of tag */
export type TagProps = {
    color?: ColorTypes;
    isLightColor: boolean;
    size?: SizeTypes;
    isRounded?: boolean;
    attributes?: HTMLAttributes<HTMLSpanElement | HTMLAnchorElement>;
    datasets?: CommonDataSet;
    children?: ReactNode;
} & CommonStyleClasses & (
    {
        useAnchor: true;
        isAnchorClose?: boolean;
        onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    } | {
        useAnchor: false;
        isAnchorClose?: undefined;
        onClick?: undefined;
    }
) & (
    {
        hasCombination: true;
        combinations: TagCombinationProps;
    } | {
        hasCombination : false;
        combinations: undefined;
    }
);
/** Type definition for property of tags */
export type TagsProps = {
    tags: TagProps[];
    hasAddons?: boolean;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
