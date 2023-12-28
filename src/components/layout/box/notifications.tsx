import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    CommonDataSet,
    NotificationsAttributes,
    NotificationsClasses,
    NotificationsDatasets,
    NotificationsProps
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {Button} from "../../element";

export const Notifications = (props: NotificationsProps) => {
    const {
        color,
        isLightColor = false,
        classes = {},
        attributes = {},
        datasets = {},
        children,
    } = props;

    // Initialize if undefined
    (['wrap', 'button'] as Array<keyof NotificationsAttributes>)
        .forEach((k: keyof NotificationsAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'button'] as Array<keyof NotificationsDatasets>)
        .forEach((k: keyof NotificationsDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map;
            }
        });
    (['wrap', 'button'] as Array<keyof NotificationsClasses>)
        .forEach((k: keyof NotificationsClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });

    // Set default values if not already set
    (['wrap', 'button'] as Array<keyof NotificationsClasses>)
        .forEach((k: keyof NotificationsClasses) => {
            let defaultValue;
            switch (k) {
                case 'wrap': defaultValue = 'notification'; break;
                case 'button': defaultValue = 'delete'; break;
            }
            if (defaultValue && !classes[k]?.includes(defaultValue)) {
                classes[k]?.push(defaultValue);
            }
        });
    if (classes.wrap) {
        if (color) {
            const pattern: string = COLOR_TYPES.join('|');
            const reg: string = `^is-(${pattern})$`;
            if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                classes.wrap?.push('is-' + color);
            }
            if (isLightColor && !classes.wrap?.includes('is-light')) {
                classes.wrap?.push('is-light');
            }
        }
    }
    let datasetsShwon = {} as any;
    (['wrap', 'button'] as Array<keyof NotificationsDatasets>)
        .forEach((k: keyof NotificationsDatasets) => {
            if (!Object.hasOwn(datasetsShwon, k)) {
                datasetsShwon[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetsShwon.wrap}
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
