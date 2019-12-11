import { InputType, Field } from 'type-graphql';
import { ArrayMaxSize, IsArray, IsString, Length } from 'class-validator';

@InputType()
export class LanguageUpdate {
  @Field({ nullable: true })
  @IsArray()
  @ArrayMaxSize(20)
  @IsString({ each: true })
  @Length(24, 24, { each: true })
  readonly opportunities: string[];
}

@InputType()
export class LanguageUpdateInput {
  @Field()
  @IsString()
  @Length(24, 24)
  id: string;

  @Field()
  readonly input: LanguageUpdate;
}
