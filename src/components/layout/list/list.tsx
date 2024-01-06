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
import {initialize, initializeDatasets} from "../../common";

export const List = (
    props: ListProps
) => {
    const {
        items,
        headers = [],
        itemElement,
        headerElement,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as ListAttributes, [
            'wrap', 'header'
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as ListDatasets, [
            'wrap', 'header'
        ], new Map()
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as ListClasses, [
            'wrap'
        ], []
    );

    // Set default values if not already set
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

    let ListHeaderTag: React.ElementType<ListHeaderProps> = ListHeader;
    if (headerElement !== undefined) {
        ListHeaderTag = headerElement;
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
                        let ListDetailTag: React.ElementType<ListDetailProps> = ListDetail;
                        if (itemElement !== undefined) {
                            ListDetailTag = itemElement;
                        }
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
