import { Test, TestingModule } from '@nestjs/testing';
import { TimeIntervalsService } from '../time-intervals.service';

describe('TimeIntervalsService', () => {
  let service: TimeIntervalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeIntervalsService],
    }).compile();

    service = module.get<TimeIntervalsService>(TimeIntervalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
