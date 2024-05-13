import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { CircleX, Settings2, UserCog } from 'lucide-react';
import { Text } from '@/components/ui/text';
import { Button } from '../ui/button';

type Service = {
  serviceId: number;
  name: string;
  description: string;
  numClients: number;
  server: 'US' | 'JP';
};

export const columns: ColumnDef<Service>[] = [
  {
    accessorKey: 'name',
    header: 'Service Name',
    cell: ({ row }) => (
      <Button variant="link" className="text-foreground">
        <a className="underline underline-offset-1">{row.getValue('name')}</a>
      </Button>
    ),
  },
  {
    accessorKey: 'serviceId',
    header: 'Service ID',
    cell: ({ row }) => (
      <Button variant="link" className="text-foreground">
        <a className="underline underline-offset-1">
          {row.getValue('serviceId')}
        </a>
      </Button>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <Text variant="muted">{row.getValue('description')}</Text>
    ),
  },
  {
    accessorKey: 'numClients',
    header: 'Clients',
    cell: ({ row }) => (
      <Text variant="muted">{row.getValue('numClients')}</Text>
    ),
  },
  {
    accessorKey: 'server',
    header: 'Server',
    cell: ({ row }) => (
      <Button variant="link">
        <Badge className="text-center">{row.getValue('server')}</Badge>
      </Button>
    ),
  },
  {
    accessorKey: 'quickActions',
    header: 'Quick Actions',
    cell: ({ row }) => (
      <div className="flex flex-row justify-end gap-x-3">
        <Settings2 width={18} height={19} className="text-foreground" />
        <UserCog width={18} height={19} />
        <CircleX width={18} height={19} />
      </div>
    ),
  },
];
