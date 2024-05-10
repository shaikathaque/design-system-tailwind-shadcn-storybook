import { ColumnDef } from "@tanstack/react-table"

type Service = {
    serviceId: number
    name: string
    description: string
    numClients: number
    server: "US" | "JP"
}


export const columns: ColumnDef<Service>[] = [
    {
        accessorKey: "serviceId",
        header: "Service ID"
    },
    {
        accessorKey: "name",
        header: "Service Name"
    },
    {
        accessorKey: "description",
        header: "Description"
    },
    {
        accessorKey: "numClients",
        header: "Clients"
    },
    {
        accessorKey: "server",
        header: "Server"
    }
]