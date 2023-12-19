import React, {Fragment, ReactNode} from "react";
import {DialogHeaderClasses} from "../../@types";

export type HeaderProps = {
    title: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    classes?: DialogHeaderClasses;
};

export const Header = (
    {
        title,
        onClose,
        classes = {
            wrap: [],
            title: [],
        },
        ...props
    }: HeaderProps
) => {
    (['wrap', 'title'] as Array<keyof DialogHeaderClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.wrap && !classes.wrap.includes('modal-card-head')) {
        classes.wrap?.push('modal-card-head');
    }
    if (classes.title && !classes.title.includes('modal-card-title')) {
        classes.title.push('modal-card-title');
    }
    return (
        <Fragment>
            <header className={classes.wrap?.join(' ')}>
                <div className={classes.title?.join(' ')}>{title}</div>
                <button className="delete" aria-label="close" onClick={onClose}></button>
            </header>
        </Fragment>
    );
};
