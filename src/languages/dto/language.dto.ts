import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The language model' })
export class LanguageType {
  @Field(
    () => ID,
    {
      description: 'ID of the language'
    })
  readonly id?: string;

  @Field({
      description: 'The name of the language'
    })
  readonly name: string;
}
