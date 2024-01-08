import React, {
    ReactNode,
    ButtonHTMLAttributes,
} from "react";
import {
    ColorTypes,
    CommonDataSet,
    CommonStyleClasses,
    SizeTypes,
} from "./index";
import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

/** Type definition for fields of button */
export type ButtonFields = {
    label: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    colorType?: ColorTypes;
    colorLight?: boolean;
    size?: SizeTypes;
    disabled?: boolean;
    noDefaultClasses?: boolean;
    icon?: FontAwesomeIconProps; //icon({name: 'check'}),
    iconPosition?: "left" | "right";
};
/** Type definition for property of button */
export type ButtonProps = ButtonFields & {
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
