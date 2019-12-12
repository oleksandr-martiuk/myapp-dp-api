import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
}, {
  collection: 'users'
});
