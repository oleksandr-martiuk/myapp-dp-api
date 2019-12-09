import { Args, Query, Resolver } from '@nestjs/graphql';
import { LanguagesService } from './languages.service';
import { LanguageType } from './dto/language.dto';

@Resolver('Languages')
export class LanguagesResolver {
  constructor(
    private readonly languageService: LanguagesService
  ) {}

  @Query(() => [LanguageType])
  async readAllLanguages() {
    return this.languageService.readAllLanguages();
  }

  @Query(() => LanguageType)
  async readLanguage(@Args('id') id: string) {
    return this.languageService.readLanguage(id);
  }
}
