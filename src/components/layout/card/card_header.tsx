import {Fragment} from "react";
import {
    CommonDataSet,
    CardHeaderAttributes,
    CardHeaderClasses,
    CardHeaderDatasets,
    CardHeaderProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {Icons} from "../../element";

export const CardHeader = (props: CardHeaderProps) => {
    const {
        title,
        buttonIcon,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'title', 'button', 'span'] as Array<keyof CardHeaderAttributes>)
        .forEach((k: keyof CardHeaderAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'title', 'button', 'span'] as Array<keyof CardHeaderDatasets>)
        .forEach((k: keyof CardHeaderDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['wrap', 'title', 'button', 'span'] as Array<keyof CardHeaderClasses>)
        .forEach((k: keyof CardHeaderClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });

    // Set default values if not already set
    (['wrap', 'title', 'button', 'span'] as Array<keyof CardHeaderClasses>)
        .forEach((k: keyof CardHeaderClasses) => {
            let checkValue;
            switch (k) {
                case 'wrap': checkValue = 'card-header'; break;
                case 'title': checkValue = 'card-header-title'; break;
                case 'button': checkValue = 'card-header-icon'; break;
                case 'span': checkValue = 'icon'; break;
            }
            if (checkValue && !classes[k]?.includes(checkValue)) {
                classes[k]?.push(checkValue);
            }
        });

    let datasetShown = {} as any;
    (['wrap', 'title', 'button', 'span'] as Array<keyof CardHeaderDatasets>)
        .forEach((k: keyof CardHeaderDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });

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
