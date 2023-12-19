import React from 'react';
import {Dialog} from "../../../../components/layout/dialog";

export default {
    component: Dialog,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Dialog
        isActive={true}
        title="Dialog Box"
        {...args}
    >
        <span>TEST</span>
    </Dialog>
}