import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Shadcn/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'outline',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Button Variants

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// Various Sizes

export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'Default',
  },
};
export const SizeIcon: Story = {
  args: {
    size: 'icon',
    children: 'icon',
  },
};
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};
