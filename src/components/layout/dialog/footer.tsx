import React, {Fragment, ReactNode} from "react";
import {DialogFooterClasses} from "../../@types";
import {Button} from "../../mui/button";

export type FooterProps = {
    buttonLabel: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: DialogFooterClasses;
};

export const Footer = (
    {
        buttonLabel,
        onClose,
        classes = {
            wrap: [],
            button: [],
        },
        ...props
    }: FooterProps
) => {
    (['wrap', 'button'] as Array<keyof DialogFooterClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.wrap && !classes.wrap.includes('modal-card-foot')) {
        classes.wrap.push('modal-card-foot');
    }
    if (classes.button && !classes.button.includes('button')) {
        classes.button.push('button');
    }
    return (
        <Fragment>
            <footer className={classes.wrap?.join(' ')}>
                <Button
                    label={buttonLabel}
                    classes={classes.button}
                    onClick={onClose}
                />
            </footer>
        </Fragment>
    )
};
