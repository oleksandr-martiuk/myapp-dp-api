import { Schema } from 'mongoose';
const { ObjectId } = Schema.Types;

export const UserSchema = new Schema({
  firstName: {
    type: String,
    unique : true,
    required : true,
    dropDups: true
  },
  lastName: {
    type: String,
    unique : true,
    required : true,
    dropDups: true
  },
  email: {
    type: String,
    unique : true,
    required : true,
    dropDups: true,
    lowercase: true
  },
  contacts: {
    country: String,
    city: String
  },
  description: {
    short: String,
    long: String
  },
  studyPrograms: [{ type: ObjectId, ref: 'StudyProgram' }],
  languages: [{ type: ObjectId, ref: 'Language' }],
  technologies: [{ type: ObjectId, ref: 'Technology' }],
  teachingTimes: [{
    from: String,
    to: String
  }],
});

// TODO: such function could be used for Registration/LogIn
// var userschema = mongoose.Schema({
//   password: {
//     type: String,
//     required: function(){
//       return this.email? true : false
//     }
//   },
//   email: String
// });
