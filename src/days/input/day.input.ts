import { Field, InputType } from 'type-graphql';

@InputType()
export class DayInput {
  @Field()
  readonly name: string;
  @Field()
  readonly shortName: string;
}
