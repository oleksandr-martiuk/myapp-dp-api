import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDay } from './interfaces/day.interface';
import { CreateDayInput } from './input/create-day.input';
import { UpdateDayInput } from './input/update-day.input';

@Injectable()
export class DaysService {
  constructor(@InjectModel('Day') private readonly dayModel: mongoose.Model<IDay>) {}

  async findAll(): Promise<IDay[]> {
    return this.dayModel.find().sort({order: 1});
  }

  async findOneById(id: string): Promise<IDay> {
    return this.dayModel.findById(id);
  }

  async createOne(createDayDto: CreateDayInput): Promise<IDay> {
    const createdDay = new this.dayModel(createDayDto);
    return createdDay.save();
  }

  async updateOne(id: string, update: UpdateDayInput) {
    return this.dayModel.findByIdAndUpdate(id, update, { new: true });
  }

  async deleteOne(id: string): Promise<IDay> {
    return this.dayModel.findByIdAndDelete(id);
  }
}
