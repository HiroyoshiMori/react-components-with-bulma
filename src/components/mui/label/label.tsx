import React, {Fragment, ReactNode} from "react";
import {LabelFields} from "../../@types";

type LabelProps =
    LabelFields & Partial<{children: ReactNode}> |
    Partial<LabelFields> & {children: ReactNode};

export const Label = (
    {
        label,
        htmlFor,
        classes = [],
        children,
    }: LabelProps
) => {
    return (
        <Fragment>
            <label
                htmlFor={htmlFor}
                className={classes.join(' ')}
            >{children ?? label}</label>
        </Fragment>
    )
}
