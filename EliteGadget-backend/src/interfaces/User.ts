import { Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  comparePassword(candidatePassword: string): Promise<boolean>;
}
