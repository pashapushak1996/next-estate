import type {Meta, StoryObj} from "@storybook/react";

import {Button} from "@/app/components/button/Button";
import {ButtonEnum} from "@/app/components/button/button.types";

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant:ButtonEnum.primary,
        children: 'Primary',
    },
};

export const Secondary={
    args:{
        variant:ButtonEnum.secondary,
        children:'Secondary'
    }
}

export const Outline: Story = {
    args: {
        variant:ButtonEnum.outline,
        children: 'Outline',
    },
};

export const Error: Story = {
    args: {
        variant:ButtonEnum.error,
        children: 'Error',
    },
};

export const WithRoundedSide={
    args:{
        ...Primary.args,
        roundedSide:'left'
    }
}




