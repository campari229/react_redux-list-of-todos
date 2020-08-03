export interface Todo {
  completed: boolean;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
}

export interface User {
  address: Address;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  updatedAt: string;
  username: string;
  website: string;
}

type Address = {
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: string;
  lng: string;
};

export interface PreparedTodo {
  completed: boolean;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
  user: User | undefined;
}
