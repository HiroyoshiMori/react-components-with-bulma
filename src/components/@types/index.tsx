// List of horizontal positions
import React, {
    AnchorHTMLAttributes,
    HTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    ReactNode
} from "react";

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
export type CommonStyleClasses = {
    classes?: string[];
};
export type CommonDataSet = Map<string, any>;

/** Type definition for attributes of header of Dialog */
export type DialogHeaderAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    title?: HTMLAttributes<HTMLDivElement>;
    button?: HTMLAttributes<HTMLButtonElement>;
};
/** Type definition for attributes of footer of Dialog */
export type DialogFooterAttributes = {
    wrap?: HTMLAttributes<HTMLElement>;
    button?: HTMLAttributes<HTMLButtonElement>;
};
/** Type definition for attributes of Dialog */
export type DialogAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    card?: HTMLAttributes<HTMLDivElement>;
    header?: DialogHeaderAttributes;
    content?: HTMLAttributes<HTMLElement>;
    footer?: DialogFooterAttributes;
};
/** Type definition for attributes of header of Dialog */
export type DialogHeaderDatasets = {
    wrap?: CommonDataSet;
    title?: CommonDataSet;
    button?: CommonDataSet;
};
/** Type definition for datasets of footer of Dialog */
export type DialogFooterDatasets = {
    wrap?: CommonDataSet;
    button?: CommonDataSet;
};
/** Type definition for datasets of Dialog */
export type DialogDatasets = {
    wrap?: CommonDataSet;
    card?: CommonDataSet;
    header?: DialogHeaderDatasets;
    content?: CommonDataSet;
    footer?: DialogFooterDatasets;
};
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
/** Type definition for attributes of Progressbar */
export type ProgressBarAttributes = {
    dialog?: DialogAttributes,
    progressbar?: HTMLAttributes<HTMLElement>;
}
/** Type definition for datasets of Progressbar */
export type ProgressBarDatasets = {
    dialog?: DialogDatasets,
    progressbar?: CommonDataSet;
}


/** Type definition for fields of columns in List */
export type ListColumnFields = {
    value: any;
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for classes of row of List */
export type ListRowClasses = {
    wrap?: string[];
    column?: string[];
};
/** Type definition for attributes of List */
export type ListAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>,
    header?: HTMLAttributes<HTMLDivElement>,
};
/** Type definition for datasets of List */
export type ListDatasets = {
    wrap?: CommonDataSet,
    header?: CommonDataSet,
};
/** Type definition for classes of List */
export type ListClasses = {
    wrap?: string[];
    headers?: ListRowClasses;
    detail?: ListRowClasses;
};

/** Type definition for attributes of Radio */
export type RadioAttributes = {
    wrap?: HTMLAttributes<HTMLDivElement>;
    label?: HTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition for datasets of Radio */
export type RadioDatasets = {
    wrap?: CommonDataSet;
    label?: CommonDataSet;
    input?: CommonDataSet;
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
    attributes?: RadioAttributes;
    datasets?: RadioDatasets;
};

/** Type definition for labels of pagination */
export type PaginationLabels = {
    previous?: ReactNode;
    next?: ReactNode;
    ellipsis?: ReactNode;
};
/** Type definition for attributes of pagination */
export type PaginationAttributes = {
    wrap?: HTMLAttributes<HTMLAreaElement>;
    list?: HTMLAttributes<HTMLUListElement>;
};
/** Type definition for datasets of pagination */
export type PaginationDatasets = {
    wrap?: CommonDataSet;
    list?: CommonDataSet;
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
    attributes?: HTMLAttributes<HTMLLIElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

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
    attributes?: HTMLAttributes<HTMLLIElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

/** Type definition for attributes of Navbar */
export type NavbarAttributes = {
    wrap?: HTMLAttributes<HTMLElement>;
    brand?: HTMLAttributes<HTMLDivElement>;
    burger?: AnchorHTMLAttributes<HTMLAnchorElement>;
    menu?: HTMLAttributes<HTMLDivElement>;
    menuStart?: HTMLAttributes<HTMLDivElement>;
    menuEnd?: HTMLAttributes<HTMLDivElement>;
};
export type NavbarDatasets = {
    wrap?: CommonDataSet;
    brand?: CommonDataSet;
    burger?: CommonDataSet;
    menu?: CommonDataSet;
    menuStart?: CommonDataSet;
    menuEnd?: CommonDataSet;
}
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
    attributes?: HTMLAttributes<HTMLDivElement | HTMLHeadingElement | HTMLAnchorElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

/** Type definition for attributes of menu */
export type MenuAttributes = {
    list?: HTMLAttributes<HTMLUListElement>;
    label?: HTMLAttributes<HTMLParagraphElement>;
};
/** Type definition for datasets of menu */
export type MenuDatasets = {
    list?: CommonDataSet;
    label?: CommonDataSet;
};
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
    attributes?: HTMLAttributes<HTMLLIElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
export type MenuFields = {
    label: ReactNode;
    list?: MenuItemFields[];
    attributes?: MenuAttributes;
    datasets?: MenuDatasets;
} & CommonStyleClasses;

/** Type definition for fields of label */
export type LabelFields = {
    label: string;
    htmlFor?: string;
    attributes?: LabelHTMLAttributes<HTMLLabelElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;
/** Type definition for fields of heading */
export type HeadingFields = {
    label: string;
    size?: number;
    attributes?: HTMLAttributes<HTMLHeadingElement>;
    datasets?: CommonDataSet;
} & CommonStyleClasses;

/** Type definition for classes of dropdown */
export type DropdownClasses = {
    wrap?: string[];
    trigger?: string[];
    menu?: string[];
    content?: string[];
    item?: string[];
    divider?: string[];
};
/** Type definition for fields of dropdown item */
export type DropdownItemFields = ({
    label: ReactNode;
    href?: string;
} | { isDivider: boolean }) & CommonStyleClasses;
