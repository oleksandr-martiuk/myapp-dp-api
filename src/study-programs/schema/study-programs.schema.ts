import * as mongoose from 'mongoose';

export const StudyProgramSchema = new mongoose.Schema({
  name: String
}, {
  collection: 'study_programs'
});
