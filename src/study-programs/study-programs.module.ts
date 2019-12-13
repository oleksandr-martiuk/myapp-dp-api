import { Module } from '@nestjs/common';
import { StudyProgramsService } from './study-programs.service';
import { StudyProgramsResolver } from './study-programs.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { StudyProgramSchema } from './schema/study-programs.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'StudyProgram',
    schema: StudyProgramSchema,
    collection: 'studyPrograms'
  }])],
  providers: [StudyProgramsService, StudyProgramsResolver]
})

export class StudyProgramsModule {}
