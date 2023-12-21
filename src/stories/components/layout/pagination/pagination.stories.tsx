import React, {Fragment} from "react";
import {Pagination} from "../../../../components";

export default {
    component: Pagination,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Pagination
        itemTotal={1}
        current={1}
        link={'#link%d'}
        onClick={() => {}}
        {...args}
    />,
};
export const TwoPage = {
    ...Default,
    args: {
        itemTotal: 2,
    },
};
export const TwoPageWithCurrent2 = {
    ...Default,
    args: {
        itemTotal: 2,
        current: 2,
    },
};
export const ThreePage = {
    ...Default,
    args: {
        itemTotal: 3,
    },
};
export const ThreePageWithCurrent2 = {
    ...Default,
    args: {
        itemTotal: 3,
        current: 2,
    },
};
export const ThreePageWithCurrent3 = {
    ...Default,
    args: {
        itemTotal: 3,
        current: 3,
    },
};
export const FourPage = {
    ...Default,
    args: {
        itemTotal: 4,
    },
};
export const FourPageWith2 = {
    ...Default,
    args: {
        itemTotal: 4,
        current: 2,
    },
};
export const FourPageWith3 = {
    ...Default,
    args: {
        itemTotal: 4,
        current: 3,
    },
};
export const FourPageWith4 = {
    ...Default,
    args: {
        itemTotal: 4,
        current: 4,
    },
};
export const TenPage = {
    ...Default,
    args: {
        itemTotal: 10,
    },
};
export const TenPageWithCurrent2 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 2,
    },
};
export const TenPageWithCurrent3 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 3,
    },
};
export const TenPageWithCurrent4 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 4,
    },
};
export const TenPageWithCurrent5 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
    },
};
export const TenPageWithCurrent7 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 7,
    },
};
export const TenPageWithCurrent8 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 8,
    },
};
export const TenPageWithCurrent9 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 9,
    },
};
export const TenPageWithCurrent10 = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 10,
    },
};
export const Left = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        position: 'left',
    },
};
export const Right = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        position: 'right',
    },
};
export const Rounded = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        style: 'rounded',
    },
};
export const Small = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        size: 'small',
    },
};
export const Normal = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        size: 'normal',
    },
};
export const Medium = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        size: 'medium',
    },
};
export const Large = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        size: 'large',
    },
};
export const Labels = {
    ...Default,
    args: {
        itemTotal: 10,
        current: 5,
        labels: {
            previous: <Fragment>&#171;</Fragment>,
            next: <Fragment>&#187;</Fragment>,
            ellipsis: <Fragment>&sim;</Fragment>
        }
    },
};
export const WithAttributes = {
    ...Default,
    args: {
        attributes: {
            wrap: {
                'aria-label': 'Pagination Wrap',
            },
            list: {
                'aria-label': 'Pagination List',
            },
        },
    },
};
export const WithDatasets = {
    ...Default,
    args: {
        datasets: {
            wrap: new Map([
                ['id', 'pagination-wrap'], ['name', 'Pagination wrap'],
            ]),
            list: new Map([
                ['id', 'pagination-list'], ['name', 'Pagination list'],
            ]),
        },
    },
};
