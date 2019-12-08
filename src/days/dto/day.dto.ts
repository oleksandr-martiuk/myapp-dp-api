import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class DayType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly name: string;
  @Field()
  readonly shortName: string;
}
