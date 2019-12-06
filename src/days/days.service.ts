import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Day } from './interfaces/day.interface';
import { InputDay } from './input/day.input';

@Injectable()
export class DaysService {
  constructor(@InjectModel('Day') private readonly dayModel: Model<Day>) { }

  async create(createDayDto: { input: InputDay }): Promise<Day> {
    console.log('createDayDto: ', createDayDto);
    const createdDay = new this.dayModel(InputDay);
    return createdDay.save();
  }

  async findAll(): Promise<Day[]> {
    return this.dayModel.find().exec();
  }
}
