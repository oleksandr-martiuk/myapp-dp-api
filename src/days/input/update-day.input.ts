import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UpdateDayInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  readonly name: string;

  @Field({ nullable: true })
  readonly shortName: string;

  @Field(() => Int, { nullable: true })
  readonly order: number;
}
