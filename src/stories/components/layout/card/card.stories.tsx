import {Card} from "../../../../components/layout/card";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Fragment, ReactNode} from "react";

export default {
    component: Card,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Card
        header={{
            title: "Card Header",
            buttonIcon: icon({name: 'angle-down', style: 'solid'}),
        }}
        content={{
            children: "Card Content"
        }}
        footer={{
            items: [
                "Card Footer Item 1",
                <a href="#">Card Footer Item 2</a>,
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
        }}
        {...args}
    />,
};
export const ClassesInFooter = {
    ...Default,
    args: {
        footer: {
            items: [
                "Card Footer Item 1",
                (<a href="#" className="is-active">Card Footer Item 2 w/class</a>),
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
        },
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        header: {
            title: "Card Header",
            buttonIcon: icon({name: 'angle-down', style: 'solid'}),
            classes: {
                wrap: ['card-header-wrap'],
                title: ['card-header-title'],
                button: ['card-header-button'],
                span: ['card-header-span'],
                icon: ['card-header-icon'],
            },
            attributes: {
                wrap: {'aria-label': 'card-header-wrap'},
                title: {'aria-label': 'card-header-title'},
                button: {'aria-label': 'card-header-button'},
                span: {'aria-label': 'card-header-span'},
                icon: {'aria-label': 'card-header-icon'},
            },
        },
        content: {
            children: "Card Content",
            classes: {
                wrap: ['card-content-wrap'],
                content: ['card-content-content'],
            },
            attributes: {
                wrap: {'aria-label': 'card-content-wrap'},
                content: {'aria-label': 'card-content-content'},
            },
        },
        footer: {
            items: [
                "Card Footer Item 1",
                <a href="#">Card Footer Item 2</a>,
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
            classes: ['card-footer1'],
            attributes: {'aria-label': 'card-footer'},
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'card'], ['name', 'Card']
        ]),
        header: {
            title: "Card Header",
            buttonIcon: icon({name: 'angle-down', style: 'solid'}),
            datasets: {
                wrap: new Map([
                    ['id', 'card-header-wrap'], ['name', 'Card Header Wrap']
                ]),
                title: new Map([
                    ['id', 'card-header-title'], ['name', 'Card Header Title']
                ]),
                button: new Map([
                    ['id', 'card-header-button'], ['name', 'Card Header Button']
                ]),
                span: new Map([
                    ['id', 'card-header-span'], ['name', 'Card Header Span']
                ]),
                icon: new Map([
                    ['id', 'card-header-icon'], ['name', 'Card Header Icon']
                ]),
            },
        },
        content: {
            children: "Card Content",
            datasets: {
                wrap: new Map([
                    ['id', 'card-content-wrap'], ['name', 'Card Content Wrap']
                ]),
                content: new Map([
                    ['id', 'card-content-content'], ['name', 'Card Content Content']
                ]),
            },
        },
        footer: {
            items: [
                "Card Footer Item 1",
                <a href="#">Card Footer Item 2</a>,
                "Card Footer Item 3",
                "Card Footer Item 4",
            ],
            datasets: new Map([
                ['id', 'card-footer'], ['name', 'Card Footer']
            ]),
        },
    },
};
