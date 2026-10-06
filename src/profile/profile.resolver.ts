import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Experience } from './models/experience.model';
import { Profile } from './models/profile.model';
import { Project } from './models/project.model';
import { Skill } from './models/skill.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { description: 'Personal profile with nested relations' })
  profile() {
    return this.profileService.findProfile();
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile) {
    if (profile.skills?.length) {
      return profile.skills;
    }
    return this.profileService.findSkills(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile) {
    if (profile.experience?.length) {
      return profile.experience;
    }
    return this.profileService.findExperience(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile) {
    if (profile.projects?.length) {
      return profile.projects;
    }
    return this.profileService.findProjects(profile.id);
  }
}
