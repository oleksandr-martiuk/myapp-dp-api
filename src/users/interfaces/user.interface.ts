export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contacts: IUserContacts;
  description: IUserDescription;
  studyPrograms: IStudyPrograms[];
  languages: ILanguages[];
  technologies: ITechnologies[];
  teachingTimes: IUserTeachingTime[];
}

interface IUserContacts {
  country: string;
  city: string;
}

interface IUserDescription {
  short: string;
  long: string;
}

interface IUserTeachingTime {
  from: string;
  to: string;
}

interface IStudyPrograms {
  name: string;
}

interface ILanguages {
  name: string;
}

interface ITechnologies {
  name: string;
}
