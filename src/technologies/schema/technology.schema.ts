import * as mongoose from 'mongoose';

export const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
