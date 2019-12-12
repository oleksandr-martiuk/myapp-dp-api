export interface IUser {
  id: string;
  firstName: string;
  secondName: string;
  description: {
    short: string;
    long: string;
  },
  studyPrograms: string[];
  languages: string[];
  technologies: string[];
  teachingTimes: ITeachingTime[];
}

export interface ITeachingTime {
  from: string;
  to: string;
}
