import {Fragment} from "react";
import {CardProps} from "../../@types";
import {convertDataSet} from "../../../utils";
import {CardHeader} from "./card_header";
import {CardImage} from "./card_image";
import {CardContent} from "./card_content";
import {CardFooter} from "./card_footer";

export const Card = (props: CardProps) => {
    const {
        header,
        image,
        content,
        footer,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    if (!classes.includes('card')) {
        classes.push('card');
    }

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <div
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                { header && (<CardHeader {...header} />) }
                { image && (<CardImage {...image} />) }
                { content && (<CardContent {...content} />) }
                { footer && (<CardFooter {...footer} />)}
            </div>
        </Fragment>
    );
};
