import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ILanguage } from './interfaces/language.interface';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel('Language') private readonly languageModel: mongoose.Model<ILanguage>
  ) {}

  async readAllLanguages(): Promise<ILanguage[]> {
    return this.languageModel.find().sort({order: 1});
  }

  async readLanguage(id: string): Promise<ILanguage> {
    return this.languageModel.findById(id);
  }
}
