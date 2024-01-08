import {Fragment} from "react";
import {
    COLOR_TYPES,
    HORIZONTAL_POSITIONS,
    InputFileAttributes,
    InputFileClasses,
    InputFileDatasets,
    InputFileProps,
    SIZES
} from "../../@types";
import {ArrayRegexIncludes} from "../../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {initialize, initializeDatasets} from "../../common";

export const InputFile = (props: InputFileProps) => {
    const {
        type = 'file',
        name,
        id,
        buttonLabel,
        icon,
        fileNameLabel,
    } = props;

    // Initialize if undefined
    const attributes = initialize(
        props['attributes'] as InputFileAttributes, [
            'div', 'label', 'input', 'cta', 'icon',
            'labelSpan', 'fileNameLabel'
        ], {}
    );

    // Initialize if undefined and set default values if not already set
    const classes = initialize(
        props['classes'] as InputFileClasses, [
            'div', 'label', 'input', 'cta', 'icon',
            'labelSpan', 'fileNameLabel'
        ], [], (k) => {
            let defaultValue = undefined;
            switch (k) {
                case 'div': defaultValue = 'file'; break;
                case 'label': defaultValue = 'file-label'; break;
                case 'input': defaultValue = 'file-input'; break;
                case 'cta': defaultValue = 'file-cta'; break;
                case 'icon': defaultValue = 'file-icon'; break;
                case 'labelSpan': defaultValue = 'file-label'; break;
                case 'fileNameLabel': defaultValue = 'file-name'; break;
            }
            return defaultValue;
        }
    );
    const {datasetShown} = initializeDatasets(
        props['datasets'] as InputFileDatasets, [
            'div', 'label', 'input', 'cta', 'icon',
            'labelSpan', 'fileNameLabel'
        ], new Map()
    );

    // Set default values if not already set
    if (fileNameLabel && !classes.div?.includes('has-name')) {
        classes.div?.push('has-name');
    }
    (['isBoxed', 'fileNamePositionLeft', 'fileNameExpanded'] as Array<keyof InputFileProps>)
        .forEach((k: keyof InputFileProps) => {
            if (props[k]) {
                let defaultValue;
                let container: keyof InputFileClasses | undefined;
                switch (k) {
                    case 'isBoxed':
                        defaultValue = 'is-boxed';
                        container = 'div';
                        break;
                    case 'fileNamePositionLeft':
                        defaultValue = fileNameLabel ? 'is-right' : undefined;
                        container = 'div';
                        break;
                    case 'fileNameExpanded':
                        defaultValue = fileNameLabel ? 'is-fullwidth' : undefined;
                        container = 'div';
                        break;
                }
                if (defaultValue && container && !classes[container]?.includes(defaultValue)) {
                    classes[container]?.push(defaultValue);
                }
            }
        });
    (['colorType', 'size', 'alignment'] as Array<keyof InputFileProps>)
        .forEach((k: keyof InputFileProps) => {
            if (props[k] && classes.div) {
                let pattern;
                switch (k) {
                    case 'colorType':
                        pattern = COLOR_TYPES.join('|');
                        break;
                    case 'size':
                        pattern = SIZES.join('|');
                        break;
                    case 'alignment':
                        pattern = HORIZONTAL_POSITIONS.join('|');
                        break;
                }
                if (pattern) {
                    const reg = '^is-($pattern)$';
                    if (ArrayRegexIncludes(classes.div, new RegExp(reg)) === -1) {
                        classes.div.push('is-' + props[k]);
                    }
                }
            }
        });

    return (
        <Fragment>
            <div
                className={classes.div?.join(' ')}
                {...attributes.div}
                {...datasetShown.div}
            >
                <label
                    className={classes.label?.join(' ')}
                    {...attributes.label}
                    {...datasetShown.label}
                >
                    <input
                        type={type}
                        name={name}
                        id={id}
                        className={classes.input?.join(' ')}
                        {...attributes.input}
                        {...datasetShown.input}
                    />
                    <span
                        className={classes.cta?.join(' ')}
                        {...attributes.cta}
                        {...datasetShown.cta}
                    >
                        {
                            icon && (
                                <Fragment>
                                    <span
                                        className={classes.icon?.join(' ')}
                                        {...attributes.icon}
                                        {...datasetShown.icon}
                                    >
                                        <FontAwesomeIcon {...icon} />
                                    </span>
                                </Fragment>
                            )
                        }
                        <span
                            className={classes.labelSpan?.join(' ')}
                            {...attributes.labelSpan}
                            {...datasetShown.labelSpan}
                        >
                            {buttonLabel}
                        </span>
                    </span>
                    {
                        fileNameLabel && (
                            <Fragment>
                                <span
                                    className={classes.fileNameLabel?.join(' ')}
                                    {...attributes.fileNameLabel}
                                    {...datasetShown.fileNameLabel}
                                >
                                    {fileNameLabel}
                                </span>
                            </Fragment>
                        )
                    }
                </label>
            </div>
        </Fragment>
    );
};
