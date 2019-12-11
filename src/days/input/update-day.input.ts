import { InputType, Field, Int } from 'type-graphql';
import { IsNumber, IsPositive, IsString, Length, Max } from 'class-validator';

@InputType()
export class DayUpdate {
  @Field({ nullable: true })
  @IsString()
  @Length(5, 15)
  readonly name: string;

  @Field({ nullable: true })
  @IsString()
  @Length(1, 10)
  readonly shortName: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsPositive()
  @Max(7)
  readonly order: number;
}

@InputType()
export class DayUpdateInput {
  @Field()
  @IsString()
  @Length(24, 24, {message: 'Not correct length of ID'})
  id: string;

  @Field()
  readonly update: DayUpdate;
}
