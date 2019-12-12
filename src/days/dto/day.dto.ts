import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The day model' })
export class DayType {
  @Field(
    () => ID, {
      description: 'ID of the day'
    })
  readonly id?: string;

  @Field({
    description: 'The name of the day'
  })
  readonly name: string;

  @Field({
    description: 'The short name of the day'
  })
  readonly shortName: string;
}
