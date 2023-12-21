import React from "react";
import {Breadcrumbs} from "../../../../components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default {
    component: Breadcrumbs,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Breadcrumbs
        items={[
            {label: 'AAA'},
            {label: 'BBB'},
            {label: 'CCC'},
            {label: 'DDD'},
            {label: 'EEE'},
            {label: 'FFF'},
        ]}
        {...args}
    />,
};
export const Left = {
    ...Default,
    args: {
        position: 'left',
    },
};
export const Right = {
    ...Default,
    args: {
        position: 'right',
    },
};
export const Arrow = {
    ...Default,
    args: {
        separator: 'arrow',
    },
};
export const Bullet = {
    ...Default,
    args: {
        separator: 'bullet',
    },
};
export const Dot = {
    ...Default,
    args: {
        separator: 'dot',
    },
};
export const Succeeds = {
    ...Default,
    args: {
        separator: 'succeeds',
    },
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
    },
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
    },
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
    },
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
    },
};
export const WithIcons = {
    ...Default,
    args: {
        items: [
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'home'})}/></span><span>Home</span></a>},
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'book'})}/></span><span>Book</span></a>},
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'puzzle-piece'})}/></span><span>Components</span></a>},
            {label: <a><span className="icon is-small"><FontAwesomeIcon icon={icon({name: 'file'})}/></span><span>Breadcrumb</span></a>},
        ]
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        items: [
            {label: 'AAA', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'BBB', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'CCC', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'DDD', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'EEE', attributes: {'aria-label': 'Breadcrumb item'}},
            {label: 'FFF', attributes: {'aria-label': 'Breadcrumb item'}},
        ],
        attributes: {
            'aria-label': 'Breadcrumbs',
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        items: [
            {label: 'AAA', datasets: new Map([
                ['id', 'data-id1'], ['name', 'data-name1'],
            ])},
            {label: 'BBB', datasets: new Map([
                    ['id', 'data-id2'], ['name', 'data-name2'],
                ])},
            {label: 'CCC', datasets: new Map([
                    ['id', 'data-id3'], ['name', 'data-name3'],
                ])},
            {label: 'DDD', datasets: new Map([
                    ['id', 'data-id4'], ['name', 'data-name4'],
                ])},
        ],
        datasets: new Map([
            ['id', 'data-id'], ['name', 'data-name'],
        ]),
    },
};
