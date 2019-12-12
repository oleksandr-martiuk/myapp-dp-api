import { Args, Query, Resolver } from '@nestjs/graphql';
import { StudyProgramsService } from './study-programs.service';
import { StudyProgramType } from './dto/study-program.dto';

@Resolver('StudyPrograms')
export class StudyProgramsResolver {
  constructor(
    private readonly studyProgramsService: StudyProgramsService
  ) {}

  @Query(() => [StudyProgramType])
  async readAllStudyPrograms() {
    console.log('readAllStudyPrograms');
    return this.studyProgramsService.readAllStudyPrograms();
  }

  @Query(() => StudyProgramType)
  async readStudyProgram(@Args('id') id: string) {
    return this.studyProgramsService.readStudyProgram(id);
  }
}
