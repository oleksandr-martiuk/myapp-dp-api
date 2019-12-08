import { Document } from 'mongoose';

export interface IDay extends Document {
  readonly name: string;
  readonly shortName: string;
  readonly order: number;
}
