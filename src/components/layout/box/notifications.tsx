import {Fragment} from "react";
import {
    COLOR_TYPES,
    NotificationsAttributes,
    NotificationsClasses,
    NotificationsDatasets,
    NotificationsProps
} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {Button} from "../../element";
import {initialize, initializeDatasets} from "../../common";

export const Notifications = (props: NotificationsProps) => {
    const {
        colorType,
        isLightColor = false,
        children,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as NotificationsAttributes, [
            'wrap', 'button'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as NotificationsDatasets, [
            'wrap', 'button'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as NotificationsClasses, [
            'wrap', 'button'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'notification'; break;
                case 'button': defaultValue = 'delete'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (classes.wrap) {
        if (colorType) {
            const pattern: string = COLOR_TYPES.join('|');
            const reg: string = `^is-(${pattern})$`;
            if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                classes.wrap?.push('is-' + colorType);
            }
            if (isLightColor && !classes.wrap?.includes('is-light')) {
                classes.wrap?.push('is-light');
            }
        }
    }

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <Button
                    label=""
                    noDefaultClasses={true}   // Remove unnecessary "button" and "is-responsive" classes
                    classes={classes.button}
                    attributes={attributes.button}
                    datasets={datasets.button}
                />
                {children}
            </div>
        </Fragment>
    )
};
