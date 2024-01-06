import {Fragment} from "react";
import {
    IMAGE_SIZES,
    ImageAttributes,
    ImageClasses,
    ImageDatasets,
    ImageProps,
} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {initialize, initializeDatasets} from "../../common";

export const Image = (props: ImageProps) => {
    const {
        src,
        alt,
        imageSize,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as ImageAttributes, [
            'wrap', 'image'
        ], {}
    );
    const {datasetShown} = initializeDatasets(
        props['datasets'] as ImageDatasets, [
            'wrap', 'image'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as ImageClasses, [
            'wrap', 'image'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'image'; break;
            }
            return defaultValue;
        }
    );

    // Set default value if not already set
    if (imageSize) {
        const pattern = IMAGE_SIZES.join('|');
        if (pattern && classes.wrap) {
            const reg: string = `^is-(${pattern})$`;
            if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                classes.wrap?.push('is-' + imageSize);
            }
        }
    }

    return (
        <Fragment>
            <figure
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <img
                    src={src}
                    alt={alt}
                    className={classes.image?.join(' ')}
                    {...attributes.image}
                    {...datasetShown.image}
                />
            </figure>
        </Fragment>
    );
};
