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

/** Type definition for property of button */
export type ButtonProps = {
    label: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ColorTypes;
    colorLight?: boolean;
    size?: SizeTypes;
    disabled?: boolean;
    noDefaultClasses?: boolean;
    awesomeIcon?: FontAwesomeIconProps; //icon({name: 'check'}),
    iconPosition?: "left" | "right";
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
