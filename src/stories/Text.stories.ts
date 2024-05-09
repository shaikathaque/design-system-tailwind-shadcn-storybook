import { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/components/ui/text'

const meta = {
    title: 'Text',
    component: Text,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'h1',
                'h2',
                'h3',
                'h4',
                'p',
                'small',
            ],
        },
        as: {
            control: { type: 'select' },
            options: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'p',
            ],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

// Button Variants


export const H1: Story = {
    args: {
        variant: 'h1',
        children: 'Heading 1',
    },
}

export const H2: Story = {
    args: {
        variant: 'h2',
        children: 'Heading 2',
    },
}

export const H3: Story = {
    args: {
        as: 'h3',
        variant: 'h3',
        children: 'Heading 3',
    },
}

export const H4: Story = {
    args: {
        as: 'h4',
        variant: 'h4',
        children: 'Heading 4',
    },
}

export const P: Story = {
    args: {
        variant: 'p',
        children: 'Paragraph text',
    },
}

export const Lead: Story = {
    args: {
        variant: 'lead',
        children: 'Lead text',
    },
}

export const Large: Story = {
    args: {
        variant: 'large',
        children: 'Large text',
    },
}

export const Small: Story = {
    args: {
        variant: 'small',
        children: 'Small text',
    },
}

export const Muted: Story = {
    args: {
        variant: 'muted',
        children: 'Muted text',
    },
}
