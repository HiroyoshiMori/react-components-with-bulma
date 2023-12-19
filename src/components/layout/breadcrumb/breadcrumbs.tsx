import React, {Fragment} from "react";
import {
    BreadcrumbClasses,
    BreadcrumbItemFields,
    HORIZONTAL_POSITIONS,
    PositionTypes, SEPARATORS, SeparatorsTypes, SIZES, SizeTypes
} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";

type BreadcrumbProps = {
    items: BreadcrumbItemFields[]
    position?: PositionTypes,
    separator?: SeparatorsTypes,
    size?: SizeTypes,
    classes?: BreadcrumbClasses;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export const Breadcrumbs = (props: BreadcrumbProps) => {
    const {
        items,
        position = 'centered',
        classes = {},
        onClick
    } = {...props};
    (['wrap', 'item'] as Array<keyof BreadcrumbClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });
    if (classes.wrap) {
        if (!classes.wrap.includes('breadcrumb')) {
            classes.wrap.push('breadcrumb');
        }
        (['position', 'separator', 'size'] as Array<keyof BreadcrumbProps>).forEach((k: keyof BreadcrumbProps) => {
            if (classes.wrap) {
                let pattern: string;
                let reg: string = '';
                switch (k) {
                    case 'position':
                        pattern = HORIZONTAL_POSITIONS.join('|');
                        reg = `^is-(${pattern})$`;
                        if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                            classes.wrap?.push('is-' + position);
                        }
                        break;
                    case 'separator':
                        pattern = SEPARATORS.join('|');
                        reg = `^has-(${pattern})-separator$`;
                        if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                            classes.wrap?.push('has-' + props[k] + '-separator');
                        }
                        break;
                    case 'size':
                        pattern = SIZES.join('|');
                        reg = `^is-(${pattern})$`;
                        if (!ArrayRegexIncludes(classes.wrap, new RegExp(reg))) {
                            classes.wrap?.push('is-' + props[k]);
                        }
                        break;
                }
            }
        });
    }
    return (
        <Fragment>
            <div className={classes.wrap?.join(' ')} aria-label="breadcrumbs">
                <ul>
                    {
                        items && items.map((item: BreadcrumbItemFields, idx: number) => {
                            const itemClasses: string[] = classes.item ?
                                classes.item?.concat(item.classes ?? []) : (item.classes ?? []);
                            if (item.isActive) {
                                itemClasses.push('is-active');
                            }
                            return (
                                <Fragment key={"breadcrumb-item-" + idx}>
                                    <li
                                        className={itemClasses.join(' ')}
                                        onClick={onClick}
                                    >
                                        {item.label}
                                    </li>
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </div>
        </Fragment>
    )
};
