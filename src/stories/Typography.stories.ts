import { Meta, StoryObj } from '@storybook/react'
import Typography from '@/components/ui/typography'

const meta = {
    title: 'Typography',
    component: Typography,
    tags: ['autodocs'],
    argTypes: {
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
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

// Button Variants


export const H1: Story = {
    args: {
        as: 'h1',
        element: 'h1',
        children: 'Heading 1',
    },
}

export const H2: Story = {
    args: {
        as: 'h2',
        element: 'h2',
        children: 'Heading 2',
    },
}

export const H3: Story = {
    args: {
        as: 'h3',
        element: 'h3',
        children: 'Heading 3',
    },
}

export const H4: Story = {
    args: {
        as: 'h4',
        element: 'h4',
        children: 'Heading 4',
    },
}

export const P: Story = {
    args: {
        as: 'p',
        element: 'p',
        children: 'paragraph',
    },
}
