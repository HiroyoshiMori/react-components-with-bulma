import {Fragment} from "react";
import {
    CommonDataSet,
    HORIZONTAL_POSITIONS,
    TabsClasses,
    TabsItemFields,
    TabsProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";
import {initialize} from "../../common";

export const Tab = (
    props: TabsProps
) => {
    const {
        items,
        position = 'centered',
        attributes,
        datasets = new Map(),
    } = props;

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as TabsClasses, [
            'wrap', 'item'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'wrap': defaultValue = 'tabs'; break;
            }
            return defaultValue;
        }
    );

    // Set default values if not already set
    if (classes.wrap) {
        if (position) {
            const pattern: string = HORIZONTAL_POSITIONS.join('|');
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (ArrayRegexIncludes(classes.wrap, new RegExp(reg)) === -1) {
                    classes.wrap?.push('is-' + position);
                }
            }
        }
    }
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                <ul>
                    {
                        items && items.map((item: TabsItemFields, idx: number) => {
                            const itemClasses: string[] = (classes?.item) ?
                                classes.item.concat(item.classes ?? []) : (item.classes ?? []);
                            if (item.isActive) {
                                itemClasses.push('is-active');
                            }
                            item.datasets = item.datasets ?? new Map();
                            const itemDatasetShown = convertDataSet(item.datasets as CommonDataSet);
                            return (
                                <Fragment key={"tab-item-"+idx}>
                                    <li
                                        className={itemClasses.join(' ')}
                                        {...item.attributes}
                                        {...itemDatasetShown}
                                    >
                                        <a href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                </Fragment>
                            );
                        })
                    }
                </ul>
            </div>
        </Fragment>
    );
};
