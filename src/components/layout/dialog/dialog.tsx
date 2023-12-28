import React, {Fragment} from "react";
import {
    CommonDataSet,
    DialogAttributes,
    DialogBoxProps,
    DialogClasses,
    DialogDatasets,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {Header} from "./header";
import {Footer} from "./footer";

export const Dialog = (props: DialogBoxProps) => {
    const {
        isActive,
        title,
        onClose,
        noFooter = false,
        buttonLabel,
        classes = {},
        attributes = {},
        datasets = {},
        children
    } = props;

    // Initialize if undefined
    (['wrap', 'card', 'header', 'content', 'footer'] as Array<keyof DialogAttributes>)
        .forEach((k: keyof DialogAttributes) => {
        if (attributes[k] === undefined) {
            attributes[k] = {};
        }
    });
    (['wrap', 'card', 'header', 'content', 'footer'] as Array<keyof DialogDatasets>)
        .forEach((k: keyof DialogDatasets) => {
        if (datasets[k] === undefined) {
            switch (k) {
                case 'header': case 'footer':
                    datasets[k] = {};
                    break;
                default:
                    datasets[k] = new Map();
            }
        }
    });
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
    // Set default values if not already set
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
    let datasetShown = {} as any;
    (['wrap', 'card', 'content'] as Array<keyof DialogDatasets>)
        .forEach((k: keyof DialogDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <div className="modal-background"></div>
                <div
                    className="modal-card"
                    {...attributes.card}
                    {...datasetShown.card}
                >
                    <Header
                        title={title}
                        onClose={onClose}
                        classes={classes.header}
                        attributes={attributes?.header}
                        datasets={datasets.header}
                    />
                    <section
                        className={classes?.content?.join(' ')}
                        {...attributes?.content}
                        {...datasetShown.content}
                    >
                        {children}
                    </section>
                    {
                        !noFooter && (
                            <Footer
                                buttonLabel={buttonLabel ?? 'OK'}
                                onClose={onClose}
                                classes={classes.footer}
                                attributes={attributes.footer}
                                datasets={datasets.footer}
                            />
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
};
