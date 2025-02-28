export interface Users {
  id: string;
  name: string;
  role: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserLogin {
  id: string;
  name: string;
  password: string;
}
