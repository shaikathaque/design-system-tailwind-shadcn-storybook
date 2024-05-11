import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';

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
      <a className="underline underline-offset-4">{row.getValue('name')}</a>
    ),
  },
  {
    accessorKey: 'serviceId',
    header: 'Service ID',
    cell: ({ row }) => (
      <a className="underline underline-offset-4">
        {row.getValue('serviceId')}
      </a>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <p className="text-muted-foreground">{row.getValue('description')}</p>
    ),
  },
  {
    accessorKey: 'numClients',
    header: 'Clients',
    cell: ({ row }) => (
      <p className="text-muted-foreground">{row.getValue('numClients')}</p>
    ),
  },
  {
    accessorKey: 'server',
    header: 'Server',
    cell: ({ row }) => (
      <Badge className="text-center">{row.getValue('server')}</Badge>
    ),
  },
];
