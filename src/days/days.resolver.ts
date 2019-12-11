import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { DaysService } from './days.service';
import { DayType } from './dto/day.dto';
import { DayCreateInput } from './input/create-day.input';
import { DayUpdateInput } from './input/update-day.input';

@Resolver('Days')
export class DaysResolver {
  constructor(
    private readonly daysService: DaysService
  ) {}

  @Mutation(() => DayType)
  async createDay(@Args('input') input: DayCreateInput) {
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
  async updateDay(@Args('input') input: DayUpdateInput) {
    const {id, update} = input;
    return this.daysService.updateDay(id, update);
  }

  @Mutation(() => DayType)
  async deleteDay(@Args('id') id: string) {
    return this.daysService.deleteDay(id);
  }
}
