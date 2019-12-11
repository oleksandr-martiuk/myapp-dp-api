import { Test, TestingModule } from '@nestjs/testing';
import { TimeIntervalsResolver } from '../time-intervals.resolver';

describe('TimeIntervalsResolver', () => {
  let resolver: TimeIntervalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeIntervalsResolver],
    }).compile();

    resolver = module.get<TimeIntervalsResolver>(TimeIntervalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
