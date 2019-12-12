import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDay } from './interfaces/day.interface';
import { DayCreateInput } from './input/create-day.input';
import { DayUpdate } from './input/update-day.input';

@Injectable()
export class DaysService {
  constructor(
    @InjectModel('Day') private readonly dayModel: mongoose.Model<IDay>
  ) {}

  async createDay(createDayDto: DayCreateInput): Promise<IDay> {
    const createdDay = new this.dayModel(createDayDto);
    return createdDay.save();
  }

  async readAllDays(): Promise<IDay[]> {
    return this.dayModel.find().sort({order: 1});
  }

  async readDay(id: string): Promise<IDay> {
    return this.dayModel.findById(id);
  }

  async updateDay(id: string, update: DayUpdate): Promise<IDay> {
    return this.dayModel.findByIdAndUpdate(id, update, { new: true });
  }

  async deleteDay(id: string): Promise<IDay> {
    return this.dayModel.findByIdAndDelete(id);
  }
}
