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
                    classes={classes.header}
                    attributes={attributes?.header}
                    datasets={datasets.header}
                />
                {
                    items.length > 0
                    && items.map((item, idx: number) => {
                        let ListDetailTag: React.ElementType<ListDetailProps> = ListDetail;
                        if (itemElement !== undefined) {
                            ListDetailTag = itemElement;
                        }
                        return (
                            <Fragment key={idx}>
                                <ListDetailTag
                                    item={item.columns as ListColumnFields[]}
                                    classes={classes.detail}
                                    attributes={item.attributes}
                                    datasets={item.datasets}
                                />
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    )
};
