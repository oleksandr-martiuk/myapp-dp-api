import { Query, Resolver, Args } from '@nestjs/graphql';
import { DaysService } from './days.service';
import { DayType } from './dto/day.dto';

@Resolver('Days')
export class DaysResolver {
  constructor(
    private readonly daysService: DaysService
  ) {}

  @Query(() => [DayType])
  async readAllDays() {
    return this.daysService.readAllDays();
  }

  @Query(() => DayType)
  async readDay(@Args('id') id: string) {
    return this.daysService.readDay(id);
  }
}
