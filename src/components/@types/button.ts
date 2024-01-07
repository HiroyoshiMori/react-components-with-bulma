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
    /**
     * Property for React FontAwesome
     * It will be used like <FontAwesomeIcon {...awesomeIcon} />
     * @see https://github.com/FortAwesome/react-fontawesome/blob/976c1adc59934b34e52b11c03dda4bd69831a6df/index.d.ts#L23
     */
    awesomeIcon?: FontAwesomeIconProps; // e.g., { icon: icon({name: 'check'}) },
    iconPosition?: "left" | "right";
};
/** Type definition for property of button */
export type ButtonProps = ButtonFields & {
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
