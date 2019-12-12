import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The study program model' })
export class StudyProgramType {
  @Field(
    () => ID,
    {
      description: 'ID of the study program'
    })
  readonly id?: string;

  @Field({
      description: 'The name of the study program'
    })
  readonly name: string;
}
