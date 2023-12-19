import {Fragment} from "react";
import {CommonStyleCLasses, ListColumnFields} from "../../@types";

type ListDetailProps = {
    item: ListColumnFields[];
} & CommonStyleCLasses;

export const ListDetail = (
    {
        item,
        classes = [],
        ...props
    }: ListDetailProps
) => {
    if (!classes.includes('column')) {
        classes.push('column');
    }
    return (
        <Fragment>
            {
                item.length > 0 && item.map((v: ListColumnFields, idx: number) => {
                    const colClasses: string[] = v.classes ?
                        classes.concat(v.classes) : classes;
                    return (
                        <Fragment key={"list-detail-" + idx}>
                            <div className={colClasses.join(' ')}>{v.value}</div>
                        </Fragment>
                    );
                })
            }
        </Fragment>
    )
};
