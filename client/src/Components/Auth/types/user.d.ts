export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  isAdmin?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserInForm = {
  email: string;
  password: string;
};

export type UserUpForm = {
  email: string;
  name: string;
  password: string;
  r_password: string;
};

export type UserLoad = {
  user: User | undefined;
  message: string | undefined;
};
