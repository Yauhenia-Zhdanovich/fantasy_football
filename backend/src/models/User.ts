import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  username: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true, minlength: 3, maxlength: 15 },
  password: { type: String, required: true },
});

export const User = mongoose.model<IUser>('User', UserSchema);
