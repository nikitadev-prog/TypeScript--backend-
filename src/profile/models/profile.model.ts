import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.model';
import { Project } from './project.model';
import { Skill } from './skill.model';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String, { nullable: true })
  githubUrl?: string | null;

  @Field(() => String, { nullable: true })
  linkedinUrl?: string | null;

  @Field(() => String, { nullable: true })
  websiteUrl?: string | null;

  @Field(() => String, { nullable: true })
  email?: string | null;

  @Field(() => String, { nullable: true })
  phone?: string | null;

  @Field(() => String, { nullable: true })
  location?: string | null;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
