import { Field, InputType } from 'type-graphql';
import { IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class UserContactsUpdateInput {
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
class UserDescriptionUpdateInput {
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
class TeachingTimeUpdateInput {
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
export class UserUpdate {
  @Field({ nullable: true })
  @ValidateNested()
  @Type(() => UserContactsUpdateInput)
  readonly contacts: UserContactsUpdateInput;

  @Field({ nullable: true })
  @ValidateNested()
  @Type(() => UserDescriptionUpdateInput)
  readonly description: UserDescriptionUpdateInput;

  @Field(() => [String], {nullable: true})
  @IsString({each: true})
  @Length(24, 24, {each: true})
  readonly studyPrograms: string[];

  @Field(() => [String], {nullable: true})
  @IsString({each: true})
  readonly languages: string[];

  @Field(() => [String], {nullable: true})
  @IsString({each: true})
  readonly technologies: string[];

  @Field(() => [TeachingTimeUpdateInput], {nullable: true})
  @ValidateNested()
  @Type(() => TeachingTimeUpdateInput)
  readonly teachingTimes: TeachingTimeUpdateInput[];
}

@InputType()
export class UserUpdateInput {
  @Field()
  @IsString()
  @Length(24, 24, {message: 'Not correct length of ID'})
  id: string;

  @Field()
  @ValidateNested()
  @Type(() => UserUpdate)
  readonly update: UserUpdate;
}
