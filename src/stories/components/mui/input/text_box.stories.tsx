import React from 'react';
import {TextBox} from "../../../../components/mui/input";

export default {
    component: TextBox,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <TextBox fieldName="text" value="Text" {...args} />,
};

export const PlaceHolder = {
    ...Default,
    args: {
        value: '',
        placeholder: 'Place Holder',
    }
};
export const Primary = {
    ...Default,
    args: {
        colorType: 'primary',
    }
};
export const Link = {
    ...Default,
    args: {
        colorType: 'link',
    }
};
export const Info = {
    ...Default,
    args: {
        colorType: 'info',
    }
};
export const Success = {
    ...Default,
    args: {
        colorType: 'success',
    }
};
export const Warning = {
    ...Default,
    args: {
        colorType: 'warning',
    }
};
export const Danger = {
    ...Default,
    args: {
        colorType: 'danger',
    }
};
export const Hover = {
    ...Default,
    args: {
        state: 'hover',
    }
};
export const Focus = {
    ...Default,
    args: {
        state: 'focus',
    }
};
export const Loading = {
    ...Default,
    args: {
        state: 'loading',
    }
};
export const Small = {
    ...Default,
    args: {
        size: 'small',
    }
};
export const Normal = {
    ...Default,
    args: {
        size: 'normal',
    }
};
export const Medium = {
    ...Default,
    args: {
        size: 'medium',
    }
};
export const Large = {
    ...Default,
    args: {
        size: 'large',
    }
};
export const DefaultWithClasses = {
    ...Default,
    args: {
        classes: ['has-background-primary', 'p-1']
    }
};
export const PrimaryWithClasses = {
    ...Primary,
    args: {
        value: 'Color will be Info',
        colorType: 'primary',
        classes: ['is-info']
    },
};
