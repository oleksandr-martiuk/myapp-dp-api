import { Args, Query, Resolver } from '@nestjs/graphql';
import { TechnologyType } from './dto/technology.dto';
import { TechnologiesService } from './technologies.service';

@Resolver('Technology')
export class TechnologiesResolver {
  constructor(
    private readonly technologiesService: TechnologiesService
  ) {}

  @Query(() => [TechnologyType])
  async readAllTechnologies() {
    return this.technologiesService.readAllTechnologies();
  }

  @Query(() => TechnologyType)
  async readTechnology(@Args('id') id: string) {
    return this.technologiesService.readTechnology(id);
  }
}
