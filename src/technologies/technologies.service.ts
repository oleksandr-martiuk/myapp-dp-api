import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITechnology } from './interfaces/technology.interface';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectModel('Technology') private readonly technologyModel: mongoose.Model<ITechnology>
  ) {}

  async readAllTechnologies(): Promise<ITechnology[]> {
    return this.technologyModel.find().sort({name: 1});
  }

  async readTechnology(id: string): Promise<ITechnology> {
    return this.technologyModel.findById(id);
  }
}
