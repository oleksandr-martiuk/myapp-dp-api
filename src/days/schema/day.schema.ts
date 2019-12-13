import * as mongoose from 'mongoose';

export const DaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  }
});
