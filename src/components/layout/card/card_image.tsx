import {Fragment} from "react";
import {
    CommonDataSet,
    CardImageAttributes,
    CardImageClasses,
    CardImageDatasets,
    CardImageProps, FormInputFileAttributes, FormInputFileDatasets, FormInputFileClasses,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {Image} from "../../element";
import {initialize, initializeDatasets} from "../../common";

export const CardImage = (props: CardImageProps) => {
    const {
        src,
        alt,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as CardImageAttributes, [
            'wrap', 'figure', 'image'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as CardImageDatasets, [
            'wrap', 'figure', 'image'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as CardImageClasses, [
            'wrap', 'figure', 'image'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'card-image'; break;
                case 'figure': defaultValue = 'image'; break;
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
                <Image
                    src={src}
                    alt={alt}
                    classes={{
                        wrap: classes.figure,
                        image: classes.image,
                    }}
                    attributes={{
                        wrap: attributes.figure,
                        image: attributes.image,
                    }}
                    datasets={{
                        wrap: datasets.figure,
                        image: datasets.image,
                    }}
                />
            </div>
        </Fragment>
    );
};
