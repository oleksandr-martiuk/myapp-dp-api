import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDay } from './interfaces/day.interface';

@Injectable()
export class DaysService {
  constructor(
    @InjectModel('Day') private readonly dayModel: mongoose.Model<IDay>
  ) {}

  async readAllDays(): Promise<IDay[]> {
    return this.dayModel.find().sort({order: 1});
  }

  async readDay(id: string): Promise<IDay> {
    return this.dayModel.findById(id);
  }
}
