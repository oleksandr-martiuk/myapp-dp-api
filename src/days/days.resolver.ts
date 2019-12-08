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

  /**
   * Read MULTIPLE days
   */
  @Query(() => [DayType])
  async getAllDays() {
    return this.daysService.findAll();
  }

  /**
   * Read 1 days
   */
  @Query(() => DayType)
  async getOneDay(@Args('id') id: string) {
    return this.daysService.findOneById(id);
  }

  /**
   * Create 1 day
   */
  @Mutation(() => DayType)
  async createDay(@Args('input') input: CreateDayInput) {
    return this.daysService.createOne(input);
  }

  /**
   * Update 1 day
   */
  @Mutation(() => DayType)
  async updateDay(
    @Args('id') id: string,
    @Args('update') update: UpdateDayInput
  ) {
    return this.daysService.updateOne(id, update);
  }

  /**
   * Delete 1 day
   */
  @Mutation(() => DayType)
  async deleteDay(@Args('id') id: string) {
    return this.daysService.deleteOne(id);
  }
}
