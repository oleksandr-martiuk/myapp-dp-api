import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { UserCreateInput } from './input/create-user.input';
import { UserUpdate } from './input/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: mongoose.Model<IUser>
  ) {}

  async createUser(createUserDto: UserCreateInput): Promise<IUser> {
      const createdUser = new this.userModel(createUserDto);
      const newUser = await createdUser.save();
      return this.readUser(newUser.id);
  }

  async readAllUsers(): Promise<IUser[]> {
    return this.userModel.find()
      .populate('studyPrograms').populate('languages').populate('technologies')
      .sort({ firstName: 1, lastName: 1 });
  }

  async readUser(id: string): Promise<IUser> {
    return this.userModel.findById(id)
      .populate('studyPrograms').populate('languages').populate('technologies');
  }

  async updateUser(id: string, update: UserUpdate): Promise<IUser> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, update, { new: true });
    return this.readUser(updatedUser.id);
  }

  async deleteUser(id: string): Promise<IUser> {
    const user = await this.readUser(id);
    await this.userModel.findByIdAndDelete(id);
    return user;
  }
}
