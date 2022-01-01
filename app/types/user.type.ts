export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  address: UserAddress;
  phone?: string;
  website?: string;
};

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};