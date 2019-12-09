import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class LanguageType {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly name: string;
}
