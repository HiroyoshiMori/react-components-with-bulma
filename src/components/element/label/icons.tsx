import {Fragment, ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    IconsProps,
    IconTextProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";

export const Icons = (props: IconsProps) => {
    const {
        icon,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    if (!classes.includes('icon')) {
        classes.push('icon');
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <span
                className={classes?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                <FontAwesomeIcon {...icon} />
            </span>
        </Fragment>
    )
};

export const IconText = (props: IconTextProps) => {
    const {
        items,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    if (!classes.includes('icon-text')) {
        classes.push('icon-text');
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <span
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
            {
                items && items.length > 0 && items.map((item: IconsProps|ReactNode, idx: number) => {
                    if (typeof item === 'object' && item && Object.hasOwn(item, 'icon' as PropertyKey)) {
                        return (
                            <Icons key={idx}
                                icon={(item as IconsProps).icon}
                                classes={(item as IconsProps).classes}
                                attributes={(item as IconsProps).attributes}
                                datasets={(item as IconsProps).datasets}
                            />
                        );
                    } else {
                        return (
                            <Fragment key={idx}>
                                {(item as ReactNode)}
                            </Fragment>
                        );
                    }
                })
            }
            </span>
        </Fragment>
    )
};
