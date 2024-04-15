export type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  userId: number;
};

export type ServiceType = {
  services: Service[];
  message: string | undefined;
};
