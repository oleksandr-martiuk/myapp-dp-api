import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class InputDay {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly shortName: string;
}
