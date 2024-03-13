import {Fragment} from "react";
import {
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
import {Caption} from "./caption";
import {ColGroup} from "./col_group";
import {initialize, initializeDatasets} from "../../common";

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
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as TableAttributes, [
            'wrap', 'container'
        ], {}
    );
    const {datasetShown} = initializeDatasets(
        props['datasets'] as TableDatasets, [
            'wrap', 'container'
        ], new Map()
    );
    const classes = initialize(
        props['classes'] as TableClasses, [
            'wrap', 'container'
        ], []
    );

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

    const Tag = inTableContainer ? 'div' : Fragment;

    return (
        <Fragment>
            {
                <Tag
                    className={classes.container?.join(' ')}
                    {...attributes.container}
                    {...datasetShown.container}
                >
                    {renderTable(
                        body, headers, footers, caption, colgroup,
                        classes, attributes, datasetShown
                    )}
                </Tag>
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
