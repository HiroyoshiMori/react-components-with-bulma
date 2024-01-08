import React, {Fragment} from "react";
import {
    COLOR_TYPES,
    SIZES,
    TagProps,
    TagsProps,
    TagCombinationProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {Button} from "../button";

export const Tag = (props: TagProps) => {
    const {
        useAnchor = false,
        isAnchorClose = undefined,
        onClick = undefined,
        isLightColor = false,
        size,
        isRounded = false,
        hasCombination = false,
        combinations = {},
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    if (!classes.includes('tag')) {
        classes.push('tag');
    }
    if (useAnchor && isAnchorClose && !classes.includes('is-delete')) {
        classes.push('is-delete');
    }
    // Set default values if not already set
    (["colorType", "size"] as Array<keyof TagProps>).forEach((v: keyof TagProps) => {
        if (props[v]) {
            let pattern: string | null = null;
            switch (v) {
                case 'colorType':
                    pattern = COLOR_TYPES.join('|'); break;
                case 'size':
                    pattern = SIZES.join('|'); break;
            }
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (ArrayRegexIncludes(classes, new RegExp(reg)) === -1) {
                    classes.push('is-' + props[v]);
                }
            }
        }
    });
    if (isLightColor && !classes.includes('is-light')) {
        classes.push('is-light');
    }
    if (isRounded && !classes.includes('is-rounded')) {
        classes.push('is-rounded');
    }

    if (hasCombination && combinations) {
        combinations.classes = combinations?.classes ?? [];
        combinations.attributes = combinations?.attributes ?? {};
        combinations.datasets = combinations?.datasets ?? new Map();
        ['delete', 'small'].forEach((k: string) => {
            let checkValue;
            switch (k) {
                case 'delete':
                    checkValue = 'delete';
                    break;
                case 'small':
                    checkValue = combinations && size !== 'large' ? 'is-small' : undefined;
                    break;
            }
            if (checkValue && !combinations?.classes?.includes(checkValue)) {
                combinations.classes?.push(checkValue);
            }
        });
    }
    const datasetShown = convertDataSet(datasets);

    const renderCombinations = (combinations: TagCombinationProps) => {
        combinations.attributes = combinations.attributes ?? {};
        combinations.datasets = combinations.datasets ?? new Map();

        return (
            <Fragment>
                <Fragment>
                    <Button
                        label=""
                        noDefaultClasses={true}
                        classes={combinations.classes}
                        onClick={combinations.onClick}
                        attributes={combinations.attributes}
                        datasets={combinations.datasets}
                    />
                </Fragment>
            </Fragment>
        )
    };
    let Tag: React.ElementType;
    Tag = useAnchor ? 'a' : 'span';

    return (
        <Fragment>
            <Tag
                className={classes.join(' ')}
                onClick={onClick}
                {...attributes}
                {...datasetShown}
            >
                {children}
                { hasCombination && (renderCombinations(combinations)) }
            </Tag>
        </Fragment>
    );
};

export const Tags = (props: TagsProps) => {
    const {
        tags = [],
        hasAddons = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = {...props};

    // Set default values if not already set
    if (!classes.includes('tags')) {
        classes.push('tags');
    }
    if (hasAddons && !classes.includes('has-addons')) {
        classes.push('has-addons');
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <div
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {
                    tags && tags.length > 0 && tags.map((tag: TagProps, idx: number) => {
                        return (
                            <Tag
                                key={"tag_" + idx}
                                {...tag}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
};
