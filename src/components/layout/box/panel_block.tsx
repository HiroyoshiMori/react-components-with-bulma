import React, {AnchorHTMLAttributes, Fragment, HTMLAttributes} from "react";
import {PanelBlockProps} from "../../@types/panel";
import {convertDataSet} from "../../../utils";

export const PanelBlock = (props: PanelBlockProps) => {
    const {
        children,
        isActive = false,
        tag,
        href,
        onClick,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Set default value if not already set
    ['panel-block'].forEach((k: string) => {
        if (!classes.includes(k)) {
            classes.push(k);
        }
    });
    if (isActive && !classes.includes('is-active')) {
        classes.push('is-active');
    }

    let Tag: React.ElementType;
    let anchorAttributes: AnchorHTMLAttributes<HTMLAnchorElement> = {};
    switch (tag) {
        case 'p': Tag = 'p'; break;
        case 'a':
            Tag = 'a';
            anchorAttributes.href = href;
            break;
        default:
            Tag = 'div';
    }

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...anchorAttributes}
                onClick={onClick}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
}