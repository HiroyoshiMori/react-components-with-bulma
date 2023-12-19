import React from 'react';
import {ProgressBar} from "../../../../components/layout/dialog";

export default {
    component: ProgressBar,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <ProgressBar
        isActive={true}
        title="Progress Bar"
        value={1}
        max={100}
        onClose={() => {return;}}
    />,
}