import React, {Fragment} from "react";
import {sprintf} from "sprintf-js";
import { Dialog } from "./index";

export type ProgressBarProps = {
    isActive: boolean;
    title: string;
    value: number;
    max: number;
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export const ProgressBar = (
    {
        isActive,
        title,
        value,
        max,
        onClose
    }: ProgressBarProps
) => {
    return (
        <Fragment>
            <Dialog
                isActive={isActive}
                title={title}
                noFooter={true}
                onClose={onClose}
                buttonLabel='Close'
                classes={{
                    header: {
                        wrap: ['p-3'],
                        title: ['is-size-6'],
                    },
                    content: ['pt-3', 'pr-5', 'pb-3', 'pl-5'],
                    footer: {
                        wrap: ['is-justify-content-flex-end', 'p-3'],
                    },
                }}
            >
                <progress
                    className="progress is-info"
                    value={value}
                    max={max}
                ></progress>
                <span>
                {
                    sprintf(
                        "%d",
                        (max > 0) ? value/max*100 : 0
                    )
                }% ({value}/{max})
                </span>
            </Dialog>
            {/*<div*/}
            {/*    className={"modal" + (isActive ? " is-active" : "")}*/}
            {/*>*/}
            {/*    <div className="modal-background"></div>*/}
            {/*    <div className="modal-card">*/}
            {/*        <header className="modal-card-head">*/}
            {/*            <p className="modal-card-title is-size-6">*/}
            {/*                {title}*/}
            {/*            </p>*/}
            {/*            <button className="delete" aria-label="close" onClick={onClose}></button>*/}
            {/*        </header>*/}
            {/*        <section className="modal-card-body p-5">*/}
            {/*            <progress*/}
            {/*                className="progress is-info"*/}
            {/*                value={value}*/}
            {/*                max={max}*/}
            {/*            ></progress>*/}
            {/*            {*/}
            {/*                sprintf(*/}
            {/*                    "%d",*/}
            {/*                    (max > 0) ? value/max*100 : 0*/}
            {/*                )*/}
            {/*            }% ({value}/{max})*/}
            {/*        </section>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Fragment>
    )
};
