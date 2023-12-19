import React, {Fragment, ReactNode} from "react";
import {COLOR_TYPES, ColorTypes, CommonStyleCLasses, SIZES, SizeTypes} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export type ButtonProps = {
    label: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ColorTypes;
    colorLight?: boolean;
    size?: SizeTypes;
    disabled?: boolean;
    awesomeIcon?: IconDefinition; //icon({name: 'check'}),
    iconPosition?: "left" | "right";
} & CommonStyleCLasses;

export const Button = (props: ButtonProps) => {
    const {
        label,
        onClick,
        classes = [],
        colorLight = false,
        disabled = false,
        awesomeIcon,
        iconPosition = 'left'
    } = {...props};
    if (classes.length === 0) {
        classes.push('button');
        classes.push('is-responsive');
    }
    (["type", "size"] as Array<keyof ButtonProps>).forEach((v: keyof ButtonProps) => {
        if (props[v]) {
            let pattern: string | null = null;
            switch (v) {
                case 'type':
                    pattern = COLOR_TYPES.join('|'); break;
                case 'size':
                    pattern = SIZES.join('|'); break;
            }
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (!ArrayRegexIncludes(classes, new RegExp(reg))) {
                    classes.push('is-' + props[v]);
                }
            }
        }
    });
    if (colorLight && !classes.includes('is-light')) {
        classes.push('is-light');
    }
    return (
        <Fragment>
            <button
                className={classes.join(' ')}
                onClick={onClick}
                disabled={disabled}
            >
                {
                    awesomeIcon && iconPosition === 'left' && (
                        <Fragment>
                            <span className="icon mr-1">
                                <FontAwesomeIcon icon={awesomeIcon} />
                                {/*<i className={awesomeIcon.join(' ')}></i>*/}
                            </span>
                        </Fragment>
                    )
                }
                {label}
                {
                    awesomeIcon && iconPosition === 'right' && (
                        <Fragment>
                            <span className="icon ml-1">
                                <FontAwesomeIcon icon={awesomeIcon} />
                                {/*<i className={awesomeIcon.join(' ')}></i>*/}
                            </span>
                        </Fragment>
                    )
                }
            </button>
        </Fragment>
    );
}
