import {Fragment} from "react";
import {CommonDataSet, TableCellProps} from "../../@types";
import {convertDataSet} from "../../../utils";

export const TableCell = (props: TableCellProps) => {
    const {
        value,
        colSpan,
        rowSpan,
        isHeaderCell = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = {...props};

    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            {
                isHeaderCell ? (
                    <Fragment>
                        <th
                            colSpan={colSpan}
                            rowSpan={rowSpan}
                            className={classes?.join(' ')}
                            {...attributes}
                            {...datasetShown}
                        >
                            {value}
                        </th>
                    </Fragment>
                ) : (
                    <Fragment>
                        <td
                            colSpan={colSpan}
                            rowSpan={rowSpan}
                            className={classes?.join(' ')}
                            {...attributes}
                            {...datasetShown}
                        >
                            {value}
                        </td>
                    </Fragment>
                )
            }
        </Fragment>
    );
};
