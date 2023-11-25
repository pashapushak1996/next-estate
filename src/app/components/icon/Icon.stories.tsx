import type {Meta, StoryObj} from "@storybook/react";
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

import Icon from "@/app/components/icon/Icon";
import {IconsMap} from "@/app/components/icon/icon.types";

const meta: Meta<typeof Icon> = {
    component: Icon,
    argTypes: {
        name:{
          options:Object.keys(IconsMap),
            control: {type: 'radio'},
        },
        color: {
            options: ['white', 'yellow', 'red', 'blue', 'gray'],
            control: {type: 'radio'},
        },
        hoverColor: {
            options: ['white', 'yellow', 'red', 'blue', 'gray'],
            control: {type: 'radio'},
        }
    }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        name: 'facebook',
        color: 'gray',
        hoverColor: 'yellow',
        size: 22
    },
};



