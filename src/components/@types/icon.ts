import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

// Type definition of property for icon
export type IconsProps = {
    icon: FontAwesomeIconProps;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLSpanElement>;
    datasets?: Map<string, string>;
};
export type IconTextProps = {
    items: (ReactNode | IconsProps)[];
    classes?: string[];
    attributes?: HTMLAttributes<HTMLSpanElement>;
    datasets?: Map<string, string>;
};
