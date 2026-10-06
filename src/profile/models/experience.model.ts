import { Field, GraphQLISODateTime, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  company: string;

  @Field(() => String, { nullable: true })
  companyUrl?: string | null;

  @Field(() => String)
  position: string;

  @Field(() => GraphQLISODateTime)
  startDate: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endDate?: Date | null;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => [String])
  achievements: string[];

  @Field(() => Int)
  sortOrder: number;
}
