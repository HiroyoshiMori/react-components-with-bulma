import React, {Fragment, ReactNode, ButtonHTMLAttributes} from "react";
import {COLOR_TYPES, ColorTypes, CommonDataSet, CommonStyleClasses, SIZES, SizeTypes} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
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
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

export const Button = (props: ButtonProps) => {
    const {
        label,
        onClick,
        classes = [],
        colorLight = false,
        disabled = false,
        awesomeIcon,
        iconPosition = 'left',
        attributes= {},
        datasets = new Map(),
    } = {...props};
    // Initialize if undefined
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
    // Set default values if not already set
    if (!classes.includes('button')) {
        classes.push('button');
    }
    if (!classes.includes('is-responsive')) {
        classes.push('is-responsive');
    }
    if (colorLight && !classes.includes('is-light')) {
        classes.push('is-light');
    }
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <button
                className={classes.join(' ')}
                onClick={onClick}
                disabled={disabled}
                {...attributes}
                {...datasetShown}
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
