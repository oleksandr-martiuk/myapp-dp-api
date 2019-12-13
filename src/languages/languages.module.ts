import { Module } from '@nestjs/common';
import { LanguagesResolver } from './languages.resolver';
import { LanguagesService } from './languages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageSchema } from './schema/language.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Language',
    schema: LanguageSchema,
    collection: 'languages'
  }])],
  providers: [LanguagesResolver, LanguagesService]
})

export class LanguagesModule {}
