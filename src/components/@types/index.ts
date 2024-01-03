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
// List of input types
export const INPUT_TEXT_TYPES = [
    'text', 'password', 'number', 'email', 'tel', 'search', 'url',
];
export const INPUT_BUTTON_TYPES = [
    'submit', 'button', 'image',
];
export const INPUT_OTHER_TYPES = [
    'color', 'file', 'range', 'hidden',
    'date', 'datetime-local', 'month', 'time', 'week',
];
export const INPUT_TYPES = [
    ...INPUT_TEXT_TYPES,
    'radio', 'checkbox',
    ...INPUT_OTHER_TYPES,
    ...INPUT_BUTTON_TYPES,
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
/** type definition for input[type=text] type */
export type InputTextTypes = typeof INPUT_TEXT_TYPES[number];
/** type definition for input[type=submit] type */
export type InputButtonTypes = typeof INPUT_BUTTON_TYPES[number];
/** type definition for input[type=others] type */
export type InputOtherTypes = typeof INPUT_OTHER_TYPES[number];
/** Type definition for input type */
export type InputTypes = typeof INPUT_TYPES[number];

/** Type definition for common style classes for fields */
export type CommonStyleClasses = {
    classes?: string[];
};
export type CommonDataSet = Map<string, any>;

export * from './box';
export * from './breadcrumb';
export * from './button';
export * from './card';
export * from './checkbox';
export * from './checkbox_group';
export * from './dialog';
export * from './dropdown';
export * from './form';
export * from './heading';
export * from './icon';
export * from './image';
export * from './label';
export * from './list';
export * from './menu';
export * from './navbar';
export * from './notifications';
export * from './pagination';
export * from './progressbar';
export * from './radio';
export * from './radio_group';
export * from './submit';
export * from './table';
export * from './tabs';
export * from './tag';
export * from './text_box';
export * from './textarea';
