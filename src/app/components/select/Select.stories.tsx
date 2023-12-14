import type {Meta, StoryObj} from "@storybook/react";

import Select from "@/app/components/select/Select";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;


const options = [{value: 123, label: 'This is the best thing which you can see'},
    {value: 123, label: 'This is the best thing which you can see'},
    {value: 123, label: 'This is the best thing which you can see'},
    {value: 123, label: 'This is the best thing which you can see'}]

export const Primary: Story = {
    args: {
        options
    },
};



