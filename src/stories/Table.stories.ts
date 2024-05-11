import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '@/components/data-table//data-table';

import { columns } from '@/components/data-table/columns';
import { services } from '@/lib/data';

const meta = {
  title: 'Molecules/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

// Button Variants

export const Default: Story = {
  args: {
    columns: columns,
    data: services,
  },
};

export const NoResults: Story = {
  args: {
    columns,
    data: [],
  },
};
