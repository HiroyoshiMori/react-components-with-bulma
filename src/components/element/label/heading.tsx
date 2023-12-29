import React, {Fragment} from "react";
import {
    CommonDataSet,
    HeadingProps, SIZES,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Heading = (props: HeadingProps) => {
    const {
        label,
        size = 3,
        hasSpaced = false,
        subHeading,
        useParagraph = false,
        classes = [],
        children,
        attributes,
        datasets = new Map(),
    } = props;

    // Set default values if not already set
    if (!classes.includes('title') && !classes.includes('subtitle')) {
        classes.push('title');
    }
    const pattern = `^is-([0-9]+)$`;
    if (ArrayRegexIncludes(classes, new RegExp(pattern)) === -1) {
        classes.push('is-' + ((size >= 1 && size <= 7) ? size : 3));
    }
    if (subHeading) {
        if (hasSpaced && !classes.includes('is-spaced')) {
            classes.push('is-spaced');
        }
        if (subHeading.classes == undefined) {
            subHeading.classes = [];
        }
        if (!subHeading.classes.includes('subtitle')) {
            subHeading.classes.push('subtitle');
        }
    }
    // Tag switch by useParagraph: p or h?
    let Tag: React.ElementType;
    if (useParagraph) {
        Tag = 'p';
    } else {
        // Tag switch by size: h1 - h6
        switch (size) {
            case 1: case 2: case 4: case 5: case 6:
                Tag = `h${size}`; break;
            default:
                Tag = 'h3';
        }
    }

    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <Tag className={classes.join(' ')} {...attributes} {...dataShown}>{children ?? label}</Tag>
            {
                (subHeading && size + 2 <= 6) ? (
                    <Heading
                        size={size + 2}
                        useParagraph={useParagraph}
                        classes={subHeading.classes}
                        attributes={subHeading.attributes}
                        datasets={subHeading.datasets}
                    >
                        {subHeading.label}
                    </Heading>
                ) : <Fragment />
            }
        </Fragment>
    );
}
