import {Fragment} from "react";
import {
    CommonDataSet,
    CardHeaderAttributes,
    CardHeaderClasses,
    CardHeaderDatasets,
    CardHeaderProps, FormInputFileAttributes, FormInputFileDatasets, FormInputFileClasses,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {Icons} from "../../element";
import {initialize, initializeDatasets} from "../../common";

export const CardHeader = (props: CardHeaderProps) => {
    const {
        title,
        buttonIcon,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as CardHeaderAttributes, [
            'wrap', 'title', 'button', 'span'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as CardHeaderDatasets, [
            'wrap', 'title', 'button', 'span'
        ], new Map()
    );
    const classes = initialize(
        props['classes'] as CardHeaderClasses, [
            'wrap', 'title', 'button', 'span'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'card-header'; break;
                case 'title': defaultValue = 'card-header-title'; break;
                case 'button': defaultValue = 'card-header-icon'; break;
                case 'span': defaultValue = 'icon'; break;
            }
            return defaultValue;
        }
    );

    return (
        <Fragment>
            <header
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                {
                    title && (
                        <p
                            className={classes.title?.join(' ')}
                            {...attributes.title}
                            {...datasetShown.title}
                        >
                            {title}
                        </p>
                    )
                }
                {
                    buttonIcon && (
                        <button
                            className={classes.button?.join(' ')}
                            {...attributes.button}
                            {...datasetShown.button}
                        >
                            <Icons
                                icon={buttonIcon}
                                classes={classes.span}
                                attributes={attributes.span}
                                datasets={datasets.span}
                            />
                        </button>
                    )
                }
            </header>
        </Fragment>
    )
};
