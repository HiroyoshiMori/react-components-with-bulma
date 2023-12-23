import React, {Fragment, ReactNode} from "react";
import {
    CardFooterProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const CardFooter = (props: CardFooterProps) => {
    const {
        items = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = {...props};

    // Set default values if not already set
    if (!classes.includes('card-footer')) {
        classes.push('card-footer');
    }
    const datasetShown = convertDataSet(datasets);

    /**
     * Add class to node
     *
     * @param node
     * @param classes
     * @see https://stackoverflow.com/questions/39226928/react-adding-class-to-children-components
     */
    const addClassToNode = (node: ReactNode, classes: string[]): ReactNode => {
        if (node === null) {
            console.debug('node satisfies null | undefined');
            return node;
        }
        if (typeof node !== 'object') {
            console.debug('node satisfies string | number | boolean');
            return (
                <Fragment>
                    <span
                        className={classes.join(' ')}
                    >
                        {node}
                    </span>
                </Fragment>
            );
        }
        if ('props' in node) {
            console.debug('node satisfies ReactElement | ReactPortal');
            const existing = node?.props?.className;
            const className = (existing && typeof existing === 'string') ?
                `${existing} ${classes.join(' ')}` : classes.join(' ');
            return React.cloneElement(node, { className: className });
        }
        if ('then' in node) {
            console.debug('node satisfies PromiseLikeOfReactNode');
            // @ts-ignore
            return node.then((n: ReactNode) => addClassToNode(n, classes));
        }
        console.debug('node satisfies ReactFragment');
        // wrap in div
        return <div className={classes.join(' ')}>{node}</div>

    };

    return (
        <Fragment>
            <div
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    items && items.length > 0 && items.map((item: ReactNode, idx: number) => {
                        const cloneItem = addClassToNode(item, ['card-footer-item']);
                        return (
                            <Fragment key={"card-footer-item_" + idx}>
                                {cloneItem}
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    )
};
