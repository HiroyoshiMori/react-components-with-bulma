import React, {Fragment} from "react";
import {
    CommonDataSet,
    ListColumnFields,
    ListClasses,
    ListAttributes,
    ListDatasets,
    ListProps,
    ListHeaderProps,
    ListDetailProps,
} from '../../@types';
import {ListHeader} from "./header";
import {ListDetail} from "./detail";
import {convertDataSet} from "../../../utils";

export const List = (
    props: ListProps
) => {
    const {
        items,
        headers = [],
        itemElement,
        headerElement,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'header'] as Array<keyof ListAttributes>).forEach((k: keyof ListAttributes) => {
        if (attributes[k] === undefined) {
            attributes[k] = {};
        }
    });
    (['wrap', 'header'] as Array<keyof ListDatasets>).forEach((k: keyof ListDatasets) => {
        if (datasets[k] === undefined) {
            datasets[k] = new Map();
        }
    });
    (['wrap'] as Array<keyof ListClasses>).forEach((k: keyof ListClasses) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.headers === undefined) {
        classes.headers = {};
    }
    if (classes.detail === undefined) {
        classes.detail = {
            wrap: [],
            column: [],
        };
    }
    // Set default values if not already set
    if (classes.detail.wrap && !classes.detail.wrap.includes('columns')) {
        classes.detail.wrap.push('columns');
    }
    let datasetShown = {} as any;
    (['wrap', 'header'] as Array<keyof ListDatasets>)
        .forEach((k: keyof ListDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

    let ListHeaderTag: React.ElementType<ListHeaderProps> = ListHeader;
    let ListDetailTag: React.ElementType<ListDetailProps> = ListDetail;
    if (headerElement !== undefined) {
        ListHeaderTag = headerElement;
    }
    if (itemElement !== undefined) {
        ListDetailTag = itemElement;
    }

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes?.wrap}
                {...datasetShown.wrap}
            >
                <ListHeaderTag
                    items={headers}
                    classes={classes.headers}
                    attributes={attributes?.header}
                    datasets={datasets.header}
                />
                {
                    items.data.length > 0
                    && (items.type === undefined || items.type === '' || items.type === 'default')
                    && items.data.map((item, idx: number) => {
                        item.attributes = item.attributes ?? {};
                        item.datasets = item.datasets ?? new Map();
                        const itemDatasetShown = convertDataSet(item.datasets as CommonDataSet);
                        return (
                            <Fragment key={idx}>
                                <div
                                    className={classes.detail?.wrap?.join(' ')}
                                    {...item.attributes}
                                    {...itemDatasetShown}
                                >
                                    <ListDetailTag
                                        item={item.columns as ListColumnFields[]}
                                        classes={classes?.detail?.column}
                                    />
                                </div>
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    )
};
