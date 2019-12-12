import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from '../configs/configs';

import { DaysModule } from './days/days.module';
import { UsersModule } from './users/users.module';
import { LanguagesModule } from './languages/languages.module';
import { TechnologiesModule } from './technologies/technologies.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { StudyProgramsModule } from './study-programs/study-programs.module';

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot(MONGO_URI, mongoOptions),

    DaysModule,
    LanguagesModule,
    StudyProgramsModule,
    TechnologiesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
