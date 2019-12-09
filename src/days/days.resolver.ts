import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { DaysService } from './days.service';
import { DayType } from './dto/day.dto';
import { CreateDayInput } from './input/create-day.input';
import { UpdateDayInput } from './input/update-day.input';

@Resolver('Days')
export class DaysResolver {
  constructor(
    private readonly daysService: DaysService
  ) {}

  @Mutation(() => DayType)
  async createDay(@Args('input') input: CreateDayInput) {
    return this.daysService.createDay(input);
  }

  @Query(() => [DayType])
  async readAllDays() {
    return this.daysService.readAllDays();
  }

  @Query(() => DayType)
  async readDay(@Args('id') id: string) {
    return this.daysService.readDay(id);
  }

  @Mutation(() => DayType)
  async updateDay(@Args('input') input: UpdateDayInput) {
    return this.daysService.updateDay(input);
  }

  @Mutation(() => DayType)
  async deleteDay(@Args('id') id: string) {
    return this.daysService.deleteDay(id);
  }
}
