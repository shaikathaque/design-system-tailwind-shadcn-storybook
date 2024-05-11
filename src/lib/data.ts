type Service = {
  serviceId: number;
  name: string;
  description: string;
  numClients: number;
  server: 'US' | 'JP';
};

export const services: Service[] = [
  {
    serviceId: 1234567890,
    name: 'Service A',
    description: 'Service A Description',
    numClients: 1,
    server: 'US',
  },
  {
    serviceId: 1234567890,
    name: 'Service B',
    description: 'Service B Description',
    numClients: 2,
    server: 'JP',
  },
  {
    serviceId: 1234567890,
    name: 'Service C',
    description: 'Service C Description',
    numClients: 3,
    server: 'US',
  },
];
