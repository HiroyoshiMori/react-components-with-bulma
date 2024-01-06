import {Fragment} from "react";
import {
    CommonDataSet, FormInputFileClasses,
    TableBodyClasses,
    TableBodyProps,
    TableRowProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {TableRow} from "./table_row";
import {initialize} from "../../common";

export const TableBody = (props: TableBodyProps) => {
    const {
        values,
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    const classes = initialize(
        props['classes'] as TableBodyClasses, [
            'wrap', 'row'
        ], []
    );
    // Set default values if not already set

    // Convert datasets Map to Array with 'data-'
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <tbody
                className={classes.wrap?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
            {
                values && values.length > 0 && values.map((item: TableRowProps, idx: number) => {
                    return (
                        <TableRow key={"table-row_" + idx} {...item} />
                    );
                })
            }
            </tbody>
        </Fragment>
    );
};
