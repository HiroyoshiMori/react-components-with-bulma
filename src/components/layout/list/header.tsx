import {Fragment, HTMLAttributes} from "react";
import {CommonDataSet, ListColumnFields, ListRowClasses} from "../../@types";
import {convertDataSet} from "../../../utils";

type HeaderProps = {
    items: ListColumnFields[];
    classes?: ListRowClasses;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
};

export const ListHeader = (
    props: HeaderProps
) => {
    const {
        items,
        classes = {},
        attributes = {},
        datasets = new Map(),
    } = {...props};

    // Initialize if undefined
    (['wrap', 'column'] as Array<keyof ListRowClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    // Set default values if not already set
    if (classes.wrap && !classes.wrap.includes('columns')) {
        classes.wrap.push('columns');
    }
    if (classes.column && !classes.column.includes('column')) {
        classes.column.push('column');
    }
    const dataShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <div
                className={classes.wrap ? classes.wrap.join(' ') : ''}
                {...attributes}
                {...dataShown}
            >
                {
                    items && items.map((header: ListColumnFields, idx: number) => {
                        header.attributes = header.attributes ?? {};
                        header.datasets = header.datasets ?? new Map();
                        const headerClasses: string[] = (classes.column) ?
                            classes.column.concat(header.classes ?? []) : (header.classes ?? []);
                        const dataShown = convertDataSet(header.datasets as CommonDataSet);
                        return (
                            <Fragment key={idx}>
                                <div
                                    className={headerClasses.join(' ')}
                                    {...header.attributes}
                                    {...dataShown}
                                >
                                    {header.value}
                                </div>
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    );
}