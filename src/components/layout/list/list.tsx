import {Fragment} from "react";
import {ListColumnFields, ListClasses} from '../../@types';
import {ListHeader} from "./header";
import {ListDetail} from "./detail";
import React from "react";

type ListProps = {
    items: {
        data: {
            columns: ListColumnFields[],
        }[],
        type?: string,
    };
    headers?: ListColumnFields[];
    classes?: ListClasses;
};

export const List = (
    {
        items,
        headers = [],
        classes = {},
        ...props
    }: ListProps
) => {
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
    if (classes.detail.wrap && !classes.detail.wrap.includes('columns')) {
        classes.detail.wrap.push('columns');
    }
    return (
        <Fragment>
            <div className={classes.wrap?.join(' ')}>
                <ListHeader
                    items={headers}
                    classes={classes.headers}
                />
                {
                    items.data.length > 0 && (items.type === undefined || items.type === '' || items.type === 'default') && items.data.map((item, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                <div className={classes.detail?.wrap?.join(' ')}>
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
