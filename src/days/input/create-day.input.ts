import { InputType, Field, Int } from 'type-graphql';
import { IsNumber, IsPositive, IsString, Length, Max } from 'class-validator';

@InputType()
export class DayCreateInput {
  @Field()
  @IsString()
  @Length(5, 15)
  readonly name: string;

  @Field()
  @IsString()
  @Length(1, 10)
  readonly shortName: string;

  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @Max(7)
  readonly order: number;
}
