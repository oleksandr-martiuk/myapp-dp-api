import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from '../configs/configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaysModule } from './days/days.module';
import { LanguagesModule } from './languages/languages.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
