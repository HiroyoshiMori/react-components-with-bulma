import React, {Fragment} from "react";
import {
    CommonDataSet,
    TableProps,
    TableAttributes,
    TableBodyProps,
    TableClasses,
    TableDatasets,
    TableHeaderClasses,
    TableHeaderProps,
    TableFooterClasses,
    TableFooterProps, CaptionProps, ColGroupProps,
} from "../../@types";
import {TableHeader} from "./table_header";
import {TableFooter} from "./table_footer";
import {TableBody} from "./table_body";
import {convertDataSet} from "../../../utils";
import {Caption} from "./caption";
import {ColGroup} from "./col_group";

export const Table = (props: TableProps) => {
    const {
        body,
        headers,
        footers,
        caption,
        colgroup,
        isBordered = false,
        isStriped = false,
        isNarrow = false,
        isHoverable = false,
        isFullWidth = false,
        inTableContainer = false,
        classes = {},
        attributes = {},
        datasets = {},
    } = props;

    // Initialize if undefined
    (['wrap', 'container'] as Array<keyof TableAttributes>)
        .forEach((k: keyof TableAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'container'] as Array<keyof TableDatasets>)
        .forEach((k: keyof TableDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    (['wrap', 'container'] as Array<keyof TableClasses>)
        .forEach((k: keyof TableClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
        });

    // Set default value if not already set
    ['table', 'is-bordered', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth']
        .forEach((k: string) => {
            let checkValue: boolean = false;
            switch (k) {
                case 'table': checkValue = true; break;
                case 'is-bordered': checkValue = isBordered; break;
                case 'is-striped': checkValue = isStriped; break;
                case 'is-narrow': checkValue = isNarrow; break;
                case 'is-hoverable': checkValue = isHoverable; break;
                case 'is-fullwidth': checkValue = isFullWidth; break;
            }
            if (checkValue && !classes.wrap?.includes(k)) {
                classes.wrap?.push(k);
            }
        });
    if (inTableContainer && !classes.container?.includes('table-container')) {
        classes.container?.push('table-container');
    }
    let datasetShown = {} as any;
    (['wrap', 'container'] as Array<keyof TableDatasets>)
        .forEach((k: keyof TableDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            if (datasets[k]) {
                datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
            }
        });

    return (
        <Fragment>
            {
                inTableContainer ? (
                    <div
                        className={classes.container?.join(' ')}
                    >
                        {renderTable(
                            body, headers, footers, caption, colgroup,
                            classes, attributes, datasetShown
                        )}
                    </div>
                ) : (renderTable(
                    body, headers, footers, caption, colgroup,
                    classes, attributes, datasetShown
                ))
            }
        </Fragment>
    );
};

/**
 * Render table
 *
 * @param body Data for table body
 * @param headers Data for table header
 * @param footers Data for table footer
 * @param caption Data for caption
 * @param colgroup Data for colgroup
 * @param classes classNames for table
 * @param attributes attributes for table
 * @param datasetShown datasets for table
 */
function renderTable(
    body: TableBodyProps, headers: TableHeaderProps | undefined, footers: TableFooterProps | undefined,
    caption: CaptionProps | undefined, colgroup: ColGroupProps | undefined,
    classes: TableClasses, attributes: TableAttributes, datasetShown: any
) {
    return (
        <Fragment>
            <table
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                { caption && (<Caption {...caption} />) }
                { colgroup && (<ColGroup {...colgroup} />) }
                {
                    // Render Table Header
                    headers && (
                        function () {
                            const itemClasses: TableHeaderClasses = {
                                wrap: (headers.classes?.wrap) ?
                                    headers.classes?.wrap.concat(classes.headers ?? []) : (classes.headers ?? []),
                                row: headers.classes?.row,
                            };
                            return (
                                <TableHeader
                                    {...headers}
                                    classes={itemClasses}
                                />
                            );
                        }()
                    )
                }
                <TableBody
                    {...body}
                />
                {
                    // Render Table Footer
                    footers && (
                        function() {
                            const itemClasses: TableFooterClasses = {
                                wrap: (footers.classes?.wrap) ?
                                    footers.classes?.wrap.concat(classes.footers ?? []) : (classes.footers ?? []),
                                row: footers.classes?.row,
                            };
                            return (
                                <TableFooter
                                    {...footers}
                                    classes={itemClasses}
                                />
                            );
                        }()
                    )
                }
            </table>
        </Fragment>
    );
}
