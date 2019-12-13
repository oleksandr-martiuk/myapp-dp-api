import { Field, InputType, ID } from 'type-graphql';
import { IsString, Length, IsEmail, ValidateNested, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class UserContactsInput {
  @Field()
  @IsString()
  @Length(1, 50)
  readonly country: string;

  @Field({nullable: true})
  @IsString()
  @Length(1, 50)
  readonly city: string;
}

@InputType()
class UserDescriptionInput {
  @Field({nullable: true})
  @IsString()
  @Length(1, 400)
  readonly short: string;

  @Field({nullable: true})
  @IsString()
  @Length(1, 2000)
  readonly long: string;
}

@InputType()
class TeachingTimeInput {
  @Field({nullable: true})
  @IsString()
  @Length(1, 5)
  readonly from: string;

  @Field({nullable: true})
  @IsString()
  @Length(1, 5)
  readonly to: string;
}

@InputType()
export class UserCreateInput {
  @Length(1, 30)
  @Field()
  readonly firstName: string;

  @Field()
  @IsString()
  @Length(1, 30)
  readonly lastName: string;

  @Field()
  @IsString()
  @IsEmail()
  @MaxLength(50)
  readonly email: string;

  @Field()
  @ValidateNested()
  @Type(() => UserContactsInput)
  readonly contacts: UserContactsInput;

  @Field({ nullable: true })
  @ValidateNested()
  @Type(() => UserDescriptionInput)
  readonly description: UserDescriptionInput;

  @Field(() => [ID!], {nullable: true})
  @IsString({each: true})
  @Length(24, 24, {each: true})
  readonly studyPrograms: string[];

  @Field(() => [ID!], {nullable: true})
  @IsString({each: true})
  readonly languages: string[];

  @Field(() => [ID!], {nullable: true})
  @IsString({each: true})
  readonly technologies: string[];

  @Field(() => [TeachingTimeInput], {nullable: true})
  @ValidateNested()
  @Type(() => TeachingTimeInput)
  readonly teachingTimes: TeachingTimeInput[];
}
