import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateDayInput {
  @Field()
  readonly name: string;

  @Field()
  readonly shortName: string;

  @Field(() => Int)
  readonly order: number;
}
