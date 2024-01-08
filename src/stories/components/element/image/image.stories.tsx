import React from 'react';
import {Image} from '../../../../components';
import {deIndent} from '../../../../utils';
import {IMAGE_SIZES} from '../../../../components';
// @ts-ignore
import SampleImage from '../../../assets/sample_image.jpg';

export default {
    title: 'React Component/Element/Image',
    component: Image,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Image Element',
        docs: {
            description: {
                component: 'This component renders Image element.<br />'
                        + 'In Bulma doc: https://bulma.io/documentation/elements/image/',
            },
        },
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'Path to the image',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        alt: {
            control: 'text',
            description: 'Textual replacement for the image',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        imageSize: {
            control: 'select',
            options: (['default']).concat(IMAGE_SIZES),
            mapping: {
                Default: '',
            },
            description: 'Size/ratio of image',
            table: {
                type: {
                    summary: IMAGE_SIZES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes for image',
            table: {
                type: {
                    summary: 'ImageClasses',
                    detail: deIndent(`
                            {
                                wrap: string[],
                                image: string[],
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes for image',
            table: {
                type: {
                    summary: 'ImageAttributes',
                    detail: deIndent(`
                            {
                                wrap: HTMLAttributes<HTMLElement>,
                                image: HTMLAttributes<HTMLImageElement>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Dataset for image. "data-" will be added at the beginning of attributes.',
            table: {
                type: {
                    summary: 'ImageDatasets',
                    detail: deIndent(`
                            {
                                wrap: Map<string, string>,
                                image: Map<string, string>,
                            }
                        `),
                },
                defaultValue: {
                    summary: '{}',
                },
            },
        },
    },
};
export const Default = {
    render: (args: any) => <Image
        src={SampleImage}
        alt={'Alternative Text'}
        {...args}
    />,
};
export const Size16x16 = {
    ...Default,
    args: {
        imageSize: '16x16',
    },
};
export const Size128x128 = {
    ...Default,
    args: {
        imageSize: '128x128',
    },
};
export const Landscape_16x9 = {
    ...Default,
    args: {
        imageSize: '16by9',
    },
};
export const Portrait_9x16 = {
    ...Default,
    args: {
        imageSize: '9by16',
    },
};
