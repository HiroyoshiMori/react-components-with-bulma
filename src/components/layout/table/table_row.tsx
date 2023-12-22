import {Fragment} from "react";
import {CommonDataSet, TableCellProps, TableRowProps} from "../../@types";
import {convertDataSet} from "../../../utils";
import {TableCell} from "./table_cell";

export const TableRow = (props: TableRowProps) => {
    const {
        values,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = {...props};

    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            {
                values && values.length && (
                    <tr
                        className={classes?.join(' ')}
                        {...attributes}
                        {...datasetShown}
                    >
                        {
                            values.map((item: TableCellProps, idx: number) => (
                                <TableCell key={"table-row_" + idx} {...item} />
                            ))
                        }
                    </tr>
                )
            }
        </Fragment>
    );
};
