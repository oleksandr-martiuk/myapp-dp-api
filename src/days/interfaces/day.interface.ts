import { Document } from 'mongoose';

export interface IDay extends Document {
  readonly id: string;
  readonly name: string;
  readonly shortName: string;
  readonly order: number;
}
