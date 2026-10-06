import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  category?: string | null;

  @Field(() => Int)
  sortOrder: number;
}
