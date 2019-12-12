import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The technology model' })
export class TechnologyType {
  @Field(
    () => ID,
    {
      description: 'ID of the technology'
    })
  readonly id?: string;

  @Field({
      description: 'The name of the technology'
    })
  readonly name: string;
}
