import {
    CardContentAttributes,
    CardContentClasses,
    CardContentDatasets,
    CardContentProps,
} from "../../@types";
import {Fragment} from "react";
import {initialize, initializeDatasets} from "../../common";

export const CardContent = (props: CardContentProps) => {
    const {
        children,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as CardContentAttributes, [
            'wrap', 'content'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as CardContentDatasets, [
            'wrap', 'content'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as CardContentClasses, [
            'wrap', 'content'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'card-content'; break;
                case 'content': defaultValue = 'content'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <div
                    className={classes.content?.join(' ')}
                    {...attributes.content}
                    {...datasetShown.content}
                >
                    {children}
                </div>
            </div>
        </Fragment>
    )
};
