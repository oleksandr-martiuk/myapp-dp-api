import { Test, TestingModule } from '@nestjs/testing';
import { StudyProgramsResolver } from '../study-programs.resolver';

describe('StudyProgramsResolver', () => {
  let resolver: StudyProgramsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyProgramsResolver],
    }).compile();

    resolver = module.get<StudyProgramsResolver>(StudyProgramsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
