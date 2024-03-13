import {Fragment} from "react";
import {
    PanelBlockProps,
    PanelProps, PanelTabsProps,
} from "../../@types/panel";
import {convertDataSet} from "../../../utils";
import {PanelHeader} from "./panel_header";
import {PanelTabs} from "./panel_tab";
import {PanelBlock} from "./panel_block";

export const Panel = (props: PanelProps) => {
    const {
        header,
        items,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize if undefined

    // Set default value if not already set
    if (!classes.includes('panel')) {
        classes.push('panel');
    }

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <nav
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                <PanelHeader
                    tag={header.tag}
                    classes={header.classes}
                    attributes={header.attributes}
                    datasets={header.datasets}
                >
                    {header.children}
                </PanelHeader>
                {
                    items && items.length && items.map((item: PanelTabsProps | PanelBlockProps, idx: number) => {
                        if (item && Object.hasOwn(item, 'items')) {
                            return (
                                <PanelTabs
                                    key={idx}
                                    {...item as PanelTabsProps}
                                />
                            );
                        } else {
                            return (
                                <PanelBlock
                                    key={idx}
                                    {...item as PanelBlockProps}
                                />
                            );
                        }
                    })
                }
            </nav>
        </Fragment>
    );
};
