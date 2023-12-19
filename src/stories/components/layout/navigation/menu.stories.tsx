import React from 'react';
import {Menu} from "../../../../components/layout/navigation/menu";

export default {
    component: Menu,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Menu
        menus={[
            {
                label: 'Menu 1',
                list: [
                    {
                        content: 'Menu1-1',
                        children: [{content: 'Menu1-1-1'}],
                    },
                ],
            },
        ]}
        {...args}
    />,
};
