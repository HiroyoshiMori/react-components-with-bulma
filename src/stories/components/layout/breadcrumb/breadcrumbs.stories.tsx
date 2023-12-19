import React from "react";
import {Breadcrumbs} from "../../../../components/layout/breadcrumb";
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
