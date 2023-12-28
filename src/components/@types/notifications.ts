import {
    ButtonHTMLAttributes,
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    ColorTypes,
    CommonDataSet,
} from "./index";

/** Type definitions for attributes of notifications */
export type NotificationsAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    button?: ButtonHTMLAttributes<HTMLButtonElement>;
};
/** Type definitions for datasets of notifications */
export type NotificationsDatasets = {
    wrap?: CommonDataSet;
    button?: CommonDataSet;
};
/** Type definitions for classes of notifications */
export type NotificationsClasses = {
    wrap?: string[];
    button?: string[];
};
/** Type definitions for property of notifications */
export type NotificationsProps = {
    color?: ColorTypes,
    isLightColor?: boolean,
    classes?: NotificationsClasses;
    attributes?: NotificationsAttributes;
    datasets?: NotificationsDatasets;
    children?: ReactNode;
};
