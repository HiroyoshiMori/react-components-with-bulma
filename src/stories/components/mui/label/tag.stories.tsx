import {Tag} from "../../../../components";

export default {
    component: Tag,
    tags: ['autodocs'],
};
export const Default = {
    render: (args: any) => <Tag {...args}>Example</Tag>
};
export const Primary = {
    ...Default,
    args: {
        color: 'primary',
    },
};
export const Link = {
    ...Default,
    args: {
        color: 'link',
    },
};
export const Info = {
    ...Default,
    args: {
        color: 'info',
    },
};
export const Success = {
    ...Default,
    args: {
        color: 'success',
    },
};
export const Warning = {
    ...Default,
    args: {
        color: 'warning',
    },
};
export const Danger = {
    ...Default,
    args: {
        color: 'danger',
    },
};
export const PrimaryLight = {
    ...Default,
    args: {
        color: 'primary',
        isLight: true,
    },
};
export const IsRounded = {
    ...Default,
    args: {
        isRounded: true,
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
export const HasCombination = {
    ...Default,
    args: {
        hasCombination: true,
    },
};
export const LargeHasCombination = {
    ...Default,
    args: {
        size: 'large',
        hasCombination: true,
    },
};
