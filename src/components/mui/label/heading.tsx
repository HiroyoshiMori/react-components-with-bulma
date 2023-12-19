import React, {Fragment, ReactNode} from "react";
import {ArrayRegexIncludes} from "../../../utils";
import {CommonStyleCLasses, HeadingFields} from "../../@types";

type HeadingProps =
    HeadingFields & Partial<{children: ReactNode}> |
    Partial<HeadingFields> & {children: ReactNode};

export const Heading = (
    {
        label,
        size = 3,
        classes = [],
        children,
        ...props
    }: HeadingProps
) => {
    if (size < 1 || size > 6) {
        size = 3;
    }
    if (!classes.includes('title') && !classes.includes('subtitle')) {
        classes.push('title');
    }
    if (!ArrayRegexIncludes(classes, /^is-[1-6]$/)) {
        classes.push('is-' + size);
    }
    return (
        <Fragment>
            { size === 1 && <h1 className={classes.join(' ')}>{label}</h1> }
            { size === 2 && <h2 className={classes.join(' ')}>{label}</h2> }
            { size === 4 && <h4 className={classes.join(' ')}>{label}</h4> }
            { size === 5 && <h5 className={classes.join(' ')}>{label}</h5> }
            { size === 6 && <h6 className={classes.join(' ')}>{label}</h6> }
            { (size === 3 || size < 1 || size > 6) && <h3 className={classes.join(' ')}>{children ?? label}</h3> }
        </Fragment>
    )
}
