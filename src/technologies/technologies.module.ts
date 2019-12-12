import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TechnologiesService } from './technologies.service';
import { TechnologiesResolver } from './technologies.resolver';
import { TechnologySchema } from './schema/technology.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Technology', schema: TechnologySchema }
  ])],
  providers: [TechnologiesService, TechnologiesResolver]
})
export class TechnologiesModule {}
