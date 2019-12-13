import { Field, ID, ObjectType } from 'type-graphql';
import { StudyProgramType } from '../../study-programs/dto/study-program.dto';
import { LanguageType } from 'src/languages/dto/language.dto';
import { TechnologyType } from 'src/technologies/dto/technology.dto';

@ObjectType({ description: 'The user contacts' })
export class UserContactType {
  @Field({description: 'The country of the user'})
  readonly country: string;

  @Field({description: 'The city of the user'})
  readonly city: string;
}

@ObjectType({ description: 'The user model' })
export class UserDescriptionType {
  @Field({description: 'The short description of user experience'})
  readonly short: string;

  @Field({description: 'The long description of user experience'})
  readonly long: string;
}

@ObjectType({ description: 'The user model' })
export class UserTeachingTimeType {
  @Field({description: 'The start time of user for teaching'})
  readonly from: string;

  @Field({description: 'The end time of user for teaching'})
  readonly to: string;
}

@ObjectType({ description: 'The user model' })
export class UserType {
  @Field(
  () => ID,
  { description: 'ID of the user' }
  )
  readonly id?: string;

  @Field({ description: 'The first name of the user' })
  readonly firstName: string;

  @Field({ description: 'The last name of the user' })
  readonly lastName: string;

  @Field({ description: 'The email of the user' })
  readonly email: string;

  @Field({ description: 'The contacts of the user' })
  readonly contacts: UserContactType;

  @Field({ description: 'The description of the user' })
  readonly description: UserDescriptionType;

  @Field(() => [StudyProgramType], { description: 'The study programs of the user' })
  readonly studyPrograms: StudyProgramType[];

  @Field(() => [LanguageType], { description: 'The languages of the user' })
  readonly languages: LanguageType[];

  @Field(() => [TechnologyType], { description: 'The technologies of the user' })
  readonly technologies: TechnologyType[];

  @Field(() => [UserTeachingTimeType], { description: 'The available teaching times of the user' })
  readonly teachingTimes: UserTeachingTimeType[];
}
