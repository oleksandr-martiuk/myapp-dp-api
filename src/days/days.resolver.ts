import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { DaysService } from './days.service';
import { DayType } from './dto/create-day.dto';
import { DayInput } from './input/day.input';

@Resolver('Days')
export class DaysResolver {
  constructor(
    private readonly daysService: DaysService
  ) {}

  @Query(() => String)
  async hello() {
    return 'QUERY: days resolver';
  }

  @Query(() => [DayType])
  async days() {
    return this.daysService.findAll();
  }

  @Mutation(() => DayType)
  async createDay(@Args('input') input: DayInput) {
    return this.daysService.create(input);
  }
}
