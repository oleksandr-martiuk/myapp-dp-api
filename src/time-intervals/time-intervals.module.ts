import { Module } from '@nestjs/common';
import { TimeIntervalsResolver } from './time-intervals.resolver';
import { TimeIntervalsService } from './time-intervals.service';

@Module({
  providers: [TimeIntervalsResolver, TimeIntervalsService]
})
export class TimeIntervalsModule {}
