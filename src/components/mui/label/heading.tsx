import React, {Fragment, ReactNode} from "react";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {CommonDataSet, HeadingFields} from "../../@types";

type HeadingProps =
    HeadingFields & Partial<{children: ReactNode}> |
    Partial<HeadingFields> & {children: ReactNode};

export const Heading = (props: HeadingProps) => {
    const {
        label,
        size = 3,
        classes = [],
        children,
        attributes,
        datasets = new Map(),
    } = {...props};

    // Set default values if not already set
    if (!classes.includes('title') && !classes.includes('subtitle')) {
        classes.push('title');
    }
    if (!ArrayRegexIncludes(classes, /^is-[1-6]$/)) {
        classes.push('is-' + size);
    }
    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            { size === 1 && <h1 className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</h1> }
            { size === 2 && <h2 className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</h2> }
            { size === 4 && <h4 className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</h4> }
            { size === 5 && <h5 className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</h5> }
            { size === 6 && <h6 className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</h6> }
            { (size === 3 || size < 1 || size > 6) && <h3 className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</h3> }
        </Fragment>
    );
}
