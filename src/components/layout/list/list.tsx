import {Fragment, HTMLAttributes} from "react";
import {ListColumnFields, ListClasses, ListAttributes, ListDatasets, CommonDataSet} from '../../@types';
import {ListHeader} from "./header";
import {ListDetail} from "./detail";
import React from "react";
import {convertDataSet} from "../../../utils";

type ListProps = {
    items: {
        data: {
            columns: ListColumnFields[],
            attributes?: HTMLAttributes<HTMLDivElement>,
            datasets?: CommonDataSet,
        }[],
        type?: string,
    };
    headers?: ListColumnFields[];
    classes?: ListClasses;
    attributes?: ListAttributes;
    datasets?: ListDatasets;
};

export const List = (
    props: ListProps
) => {
    const {
        items,
        headers = [],
        classes = {},
        attributes = {},
        datasets = {},
    } = {...props};

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
                datasetShown[k] = [];
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes?.wrap}
                {...datasetShown.wrap}
            >
                <ListHeader
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
                        const dataShown = convertDataSet(item.datasets as CommonDataSet);
                        return (
                            <Fragment key={idx}>
                                <div
                                    className={classes.detail?.wrap?.join(' ')}
                                    {...item.attributes}
                                    {...dataShown}
                                >
                                    <ListDetail
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
