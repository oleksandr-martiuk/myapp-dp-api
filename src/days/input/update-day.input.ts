import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UpdateDay {
  @Field({ nullable: true })
  readonly name: string;

  @Field({ nullable: true })
  readonly shortName: string;

  @Field(() => Int, { nullable: true })
  readonly order: number;
}

@InputType()
export class UpdateDayInput {
  @Field()
  id: string;

  @Field()
  readonly update: UpdateDay;
}
