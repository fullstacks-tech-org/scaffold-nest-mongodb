import { Schema, Document, model } from 'mongoose';
import { Role } from '../types';
import { Entity } from '../../types';

interface UserFields {
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

interface User extends Entity, UserFields {}

interface UserDocument extends UserFields, Document {}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true, maxlength: 150 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), default: Role.User },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserModel = model<UserDocument>('User', UserSchema);

export { User, UserModel, UserDocument, UserSchema };
