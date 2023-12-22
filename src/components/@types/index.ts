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

export * from './breadcrumb.d';
export * from './button.d';
export * from './dialog.d';
export * from './dropdown.d';
export * from './heading.d';
export * from './label.d';
export * from './list.d';
export * from './menu.d';
export * from './navbar.d';
export * from './notifications.d';
export * from './pagination.d';
export * from './progressbar.d';
export * from './radio.d';
export * from './table.d';
export * from './tabs.d';
export * from './text_box.d';

