import { Module } from '@nestjs/common';
import { DaysResolver } from './days.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DaySchema } from './days.schema';
import { DaysService } from './days.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Day',
    schema: DaySchema
  }])],
  providers: [DaysResolver, DaysService]
})

export class DaysModule {}
