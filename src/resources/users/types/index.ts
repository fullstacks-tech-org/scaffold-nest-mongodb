import { ObjectId } from 'mongoose';

export type UserFilter = {
  _id?: ObjectId;
  name?: string;
  email?: string;
  password?: string;
};

export enum Role {
  User = 'user',
  Admin = 'admin',
}
