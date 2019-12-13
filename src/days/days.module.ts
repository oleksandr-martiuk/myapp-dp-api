import { Module } from '@nestjs/common';
import { DaysResolver } from './days.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DaySchema } from './schema/day.schema';
import { DaysService } from './days.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Day',
    schema: DaySchema,
    collection: 'days'
  }])],
  providers: [DaysResolver, DaysService]
})

export class DaysModule {}
