import {Fragment} from "react";
import {
    CommonDataSet,
    IMAGE_SIZES,
    ImageAttributes,
    ImageClasses,
    ImageDatasets,
    ImageProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const Image = (props: ImageProps) => {
    const {
        src,
        alt,
        imageSize,
        classes = {},
        attributes = {},
        datasets = {},
    } = {...props};

    // Initialize if undefined
    (['wrap', 'image'] as Array<keyof ImageAttributes>)
        .forEach((k: keyof ImageAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'image'] as Array<keyof ImageDatasets>)
        .forEach((k: keyof ImageDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['wrap', 'image'] as Array<keyof ImageClasses>)
        .forEach((k: keyof ImageClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });

    // Set default value if not already set
    if (!classes.wrap?.includes('image')) {
        classes.wrap?.push('image');
    }
    if (imageSize) {
        const pattern = IMAGE_SIZES.join('|');
        if (pattern && classes.wrap) {
            const reg: string = `^is-(${pattern})$`;
            if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                classes.wrap?.push('is-' + imageSize);
            }
        }
    }

    let datasetShown = {} as any;
    (['wrap', 'image'] as Array<keyof ImageDatasets>)
        .forEach((k: keyof ImageDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });


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
