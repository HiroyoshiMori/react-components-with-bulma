import React, {Fragment, ReactNode} from "react";
import {DialogClasses} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {Header} from "./header";
import {Footer} from "./footer";

type DialogBoxProps = {
    isActive: boolean;
    title: ReactNode;
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    noFooter?: boolean;
    buttonLabel?: ReactNode;
    classes?: DialogClasses;
    children?: ReactNode;
};

export const Dialog = (
    {
        isActive,
        title,
        onClose,
        noFooter = false,
        buttonLabel,
        classes = {},
        children
    }: DialogBoxProps
) => {
    // Initialize if undefined
    (['wrap', 'content'] as Array<keyof DialogClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.header === undefined) {
        classes.header = {
            wrap: [], title: [],
        };
    }
    if (classes?.footer === undefined) {
        classes.footer = {
            wrap: [], button: [],
        };
    }
    if (classes.wrap) {
        if (!classes.wrap.includes('modal')) {
            classes.wrap.push('modal');
        }
        if (isActive) {
            classes.wrap.push('is-active');
        }
    }
    if (classes.content && !classes.content.includes('modal-card-body')) {
        classes.content.push('modal-card-body');
    }
    if (classes.header.wrap) {
        if (!ArrayRegexIncludes(classes.header.wrap, /^p[trbl]?-([0-6]|auto)$/)) {
            classes.header.wrap.push('p-3');
        }
    }
    if (classes.footer.wrap) {
        if (!ArrayRegexIncludes(classes.footer.wrap, /^p[trbl]?-([0-6]|auto)$/)) {
            classes.footer.wrap.push('p-3');
        }
        if (!ArrayRegexIncludes(
            classes.footer.wrap,
            /^is-justify-content-(flex-start|flex-end|center|space-between|space-around|space-evenly|start|end|left|right)$/)
        ) {
            classes.footer.wrap.push('is-justify-content-flex-end');
        }
    }
    return (
        <Fragment>
            <div className={classes.wrap?.join(' ')}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <Header
                        title={title}
                        onClose={onClose}
                        classes={classes.header}
                    />
                    <section className={classes?.content?.join(' ')}>
                        {children}
                    </section>
                    <Footer
                        buttonLabel={buttonLabel ?? 'OK'}
                        onClose={onClose}
                        classes={classes.footer}
                    />
                </div>
            </div>
        </Fragment>
    )
};
