import {Fragment} from "react";
import {ListColumnFields, ListRowClasses} from "../../@types";

type HeaderProps = {
    items: ListColumnFields[];
    classes?: ListRowClasses;
};

export const ListHeader = (
    {
        items,
        classes = {},
    }: HeaderProps
) => {
    (['wrap', 'column'] as Array<keyof ListRowClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.wrap && !classes.wrap.includes('columns')) {
        classes.wrap.push('columns');
    }
    if (classes.column && !classes.column.includes('column')) {
        classes.column.push('column');
    }
    return (
        <Fragment>
            <div className={classes.wrap ? classes.wrap.join(' ') : ''}>
                {
                    items && items.map((header: ListColumnFields, idx: number) => {
                        header.classes = header.classes ?? [];
                        const headerClasses: string[] = (classes.column) ?
                            classes.column.concat(header.classes) : header.classes;
                        return (
                            <Fragment key={idx}>
                                <div className={headerClasses.join(' ')}>{header.value}</div>
                            </Fragment>
                        );
                    })
                }
            </div>
        </Fragment>
    );
}