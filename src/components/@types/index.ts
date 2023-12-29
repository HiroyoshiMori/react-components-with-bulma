// List of horizontal positions
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
// List of image size
export const IMAGE_SIZES = [
    '16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128',
    'square', '1by1', '5by4', '4by3', '3by2', '5by3', '16x9', '2by1', '3by1',
    '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3',
];

// List of horizontal positions
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
/** Type definition for separators */
export type SeparatorsTypes = typeof SEPARATORS[number];
/** Type definition for image sizes */
export type ImageSizesTypes = typeof IMAGE_SIZES[number];

/** Type definition for common style classes for fields */
export type CommonStyleClasses = {
    classes?: string[];
};
export type CommonDataSet = Map<string, any>;

export * from './box';
export * from './breadcrumb';
export * from './button';
export * from './card';
export * from './dialog';
export * from './dropdown';
export * from './heading';
export * from './image';
export * from './label';
export * from './list';
export * from './menu';
export * from './navbar';
export * from './notifications';
export * from './pagination';
export * from './progressbar';
export * from './radio';
export * from './table';
export * from './tabs';
export * from './tag';
export * from './text_box';
