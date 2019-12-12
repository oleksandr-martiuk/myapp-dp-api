import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudyProgram } from './interfaces/study-program.interface';

@Injectable()
export class StudyProgramsService {
  constructor(
    @InjectModel('StudyProgram') private readonly studyProgramModel: mongoose.Model<IStudyProgram>
  ) {}

  async readAllStudyPrograms(): Promise<IStudyProgram[]> {
    return this.studyProgramModel.find().sort({name: 1});
  }

  async readStudyProgram(id: string): Promise<IStudyProgram> {
    return this.studyProgramModel.findById(id);
  }
}
