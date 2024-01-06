import {Fragment} from "react";
import {
    CommonDataSet, FormInputFileClasses,
    TableHeaderClasses,
    TableHeaderProps,
    TableRowProps
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {TableRow} from "./table_row";
import {initialize} from "../../common";

export const TableHeader = (props: TableHeaderProps) => {
    const {
        values,
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    const classes = initialize(
        props['classes'] as TableHeaderClasses, [
            'wrap', 'row'
        ], []
    );
    // Set default values if not already set

    // Convert datasets Map to Array with 'data-'
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            {
                values && values.length > 0 && (
                    <thead
                        className={classes.wrap?.join(' ')}
                        {...attributes}
                        {...datasetShown}
                    >
                    {
                        values.map((item: TableRowProps, idx: number) => {
                            return (
                                <TableRow key={"table-row_" + idx} {...item} />
                            );
                        })
                    }
                    </thead>
                )
            }
        </Fragment>
    );
};
