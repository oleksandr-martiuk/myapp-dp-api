import * as mongoose from 'mongoose';

export const StudyProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
