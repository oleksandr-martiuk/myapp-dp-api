import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The user model' })
export class UserType {
  @Field(
  () => ID,
  { description: 'ID of the user' }
  )
  readonly id?: string;

  @Field({ description: 'The first name of the user' })
  readonly firstName: string;

  @Field({ description: 'The second name of the user' })
  readonly secondName: string;

  @Field(
  () => [UserDescriptionType],
  { description: 'The description of the user' }
  )
  readonly description: UserDescriptionType;

  @Field({ description: 'The study programs of the user' })
  readonly studyPrograms: string[];

  @Field({ description: 'The languages of the user' })
  readonly languages: string[];

  @Field({ description: 'The technologies of the user' })
  readonly technologies: string[];

  @Field(
  () => TeachingTimeType,
  { description: 'The available teaching times of the user' }
  )
  readonly teachingTimes: TeachingTimeType[];
}

@ObjectType({ description: 'The user model' })
export class TeachingTimeType {
  @Field({description: 'The start time of user for teaching'})
  readonly from: string;

  @Field({description: 'The end time of user for teaching'})
  readonly to: string;
}

@ObjectType({ description: 'The user model' })
export class UserDescriptionType {
  @Field({description: 'The short description of user experience'})
  readonly short: string;

  @Field({description: 'The long description of user experience'})
  readonly long: string;
}
