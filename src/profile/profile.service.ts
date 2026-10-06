import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findProfile() {
    const profile = await this.prisma.profile.findFirst({
      include: {
        skills: { orderBy: { sortOrder: 'asc' } },
        experience: { orderBy: { sortOrder: 'asc' } },
        projects: { orderBy: { sortOrder: 'asc' } },
      },
    });

    if (!profile) {
      throw new NotFoundException('Profile not found. Run the database seed.');
    }

    return profile;
  }

  async findSkills(profileId: string) {
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findExperience(profileId: string) {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findProjects(profileId: string) {
    return this.prisma.project.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
