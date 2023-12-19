// List of horizontal positions
import React, {ReactNode} from "react";

export const HORIZONTAL_POSITIONS = ["centered", "right"];
// List of vertical positions
export const VERTICAL_POSITIONS = ["top", "middle", "bottom"];
// List of colors
export const COLOR_TYPES = ["primary", "link", "info", "success", "warning", "danger"];
// List of sizes
export const SIZES = ["small", "normal", "medium", "large"];
// List of states
export const STATES = ["hover", "focus", "loading"];
// List of separators for breadcrumb
export const SEPARATORS = ["arrow", "bullet", "dot", "succeeds"];
/** Type definition for horizontal positions */
export type PositionTypes = typeof HORIZONTAL_POSITIONS[number];
/** Type definition for vertical positions */
export type VPositionTypes = typeof VERTICAL_POSITIONS[number];
/** Type definition for colors */
export type ColorTypes = typeof COLOR_TYPES[number];
/** Type definition for sizes */
export type SizeTypes = typeof SIZES[number];
/** Type definition for states */
export type StateTypes = typeof STATES[number];
/** Type definition for seperators */
export type SeparatorsTypes = typeof SEPARATORS[number];

/** Type definition for common style classes for fields */
export type CommonStyleCLasses = {
    classes?: string[];
}
/** Type definition for classes of header of Dialog */
export type DialogHeaderClasses = {
    wrap?: string[];
    title?: string[];
};
/** Type definition for classes of footer of Dialog */
export type DialogFooterClasses = {
    wrap?: string[];
    button?: string[];
};
/** Type definition for classes of Dialog */
export type DialogClasses = {
    wrap?: string[];
    header?: DialogHeaderClasses;
    content?: string[];
    footer?: DialogFooterClasses;
}

/** Type definition for fields of columns in List */
export type ListColumnFields = {
    value: any;
} & CommonStyleCLasses;
/** Type definition for classes of row of List */
export type ListRowClasses = {
    wrap?: string[];
    column?: string[];
};
/** Type definition for classes of List */
export type ListClasses = {
    wrap?: string[];
    headers?: ListRowClasses;
    detail?: ListRowClasses;
};

/** Type definition for classes of Radio */
export type RadioClasses = {
    wrap?: string[];
    label?: string[];
    input?: string[];
};
/** Type definition for classes of RadioGroup */
export type RadioGroupClasses = {
    group?: string[];
    radio?: RadioClasses,
};
/** Type definition for fields of RadioGroup */
export type RadioGroupFields = {
    key: string | number;
    value?: string | number;
    label?: ReactNode;
    disabled?: boolean;
};

/** Type definition for classes of pagination */
export type PaginationClasses = {
    wrap?: string[];
    previous?: string[];
    next?: string[];
    list?: string[];
    link?: string[];
    ellipsis?: string[];
}

/** Type definition for classes of tabs */
export type TabsClasses = {
    wrap?: string[];
    item?: string[];
};
/** Type definition for fields of tab item */
export type TabsItemFields = {
    label: ReactNode,
    isActive?: boolean;
    href?: string;
} & CommonStyleCLasses;

/** Type definition for classes of breadcrumb */
export type BreadcrumbClasses = {
    wrap?: string[];
    item?: string[];
};
/** Type definition for fields of breadcrumb */
export type BreadcrumbItemFields = {
    label: ReactNode;
    isActive?: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & CommonStyleCLasses;

/** Type definition for classes of Navbar */
export type NavbarClasses = {
    wrap?: string[];
    brand?: string[];
    burger?: string[];
    menu?: string[];
    menuStart?: string[];
    menuEnd?: string[];
    link?: string[];
    item?: string[];
    dropdown?: string[];
    divider?: string[];
};
/** Type definition for fields of navbar items */
export type NavbarItemFields = {
    label: ReactNode;
    isDivider?: boolean;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: NavbarItemFields[];
} & CommonStyleCLasses;

/** Type definition for classes of menu */
export type MenuClasses = {
    wrap?: string[];
    label?: string[];
    list?: string[];
    item?: string[];
};
/** Type definition for fields of menu item */
export type MenuItemFields = {
    content: ReactNode;
    children?: MenuItemFields[];
} & CommonStyleCLasses;
export type MenuFields = {
    label: ReactNode;
    list?: MenuItemFields[];
} & CommonStyleCLasses;

/** Type definition for fields of label */
export type LabelFields = {
    label: string;
    htmlFor?: string;
} & CommonStyleCLasses;
/** Type definition for fields of heading */
export type HeadingFields = {
    label: string;
    size?: number;
} & CommonStyleCLasses;
