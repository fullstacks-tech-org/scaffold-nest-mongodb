export type UserFilter = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
};

export enum Role {
  User = 'user',
  Admin = 'admin',
}
