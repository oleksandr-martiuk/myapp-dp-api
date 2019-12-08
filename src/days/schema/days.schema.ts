import * as mongoose from 'mongoose';

export const DaySchema = new mongoose.Schema({
  name: String,
  shortName: String,
  order: Number
});
