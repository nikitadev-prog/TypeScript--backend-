import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name);

  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.ensureSeeded();
  }

  private async ensureSeeded() {
    const count = await this.prisma.profile.count();
    if (count > 0) {
      this.logger.log('Profile data already present');
      return;
    }

    this.logger.log('Seeding profile data...');

    await this.prisma.profile.create({
      data: {
        name: 'Орлов Никита Сергеевич',
        description:
          'Fullstack-разработчик с опытом проектирования и развития веб-продуктов. ' +
          'Работаю с React, Next.js, TypeScript на фронтенде и Node.js, NestJS, Python на бэкенде. ' +
          'Участвую в архитектурных решениях, code review и взаимодействии с заказчиками.',
        githubUrl: 'https://github.com/Nikitadev-prog',
        websiteUrl: 'https://nikitadev-website.vercel.app',
        phone: '+7 (914) 575-92-54',
        location: 'Благовещенск, Амурская область',
        skills: {
          create: [
            { name: 'TypeScript', category: 'Languages', sortOrder: 1 },
            { name: 'JavaScript', category: 'Languages', sortOrder: 2 },
            { name: 'Python', category: 'Languages', sortOrder: 3 },
            { name: 'PHP', category: 'Languages', sortOrder: 4 },
            { name: 'React', category: 'Frontend', sortOrder: 5 },
            { name: 'Next.js', category: 'Frontend', sortOrder: 6 },
            { name: 'HTML/CSS', category: 'Frontend', sortOrder: 7 },
            { name: 'AngularJS', category: 'Frontend', sortOrder: 8 },
            { name: 'Node.js', category: 'Backend', sortOrder: 9 },
            { name: 'NestJS', category: 'Backend', sortOrder: 10 },
            { name: 'Express.js', category: 'Backend', sortOrder: 11 },
            { name: 'FastAPI', category: 'Backend', sortOrder: 12 },
            { name: 'Django', category: 'Backend', sortOrder: 13 },
            { name: 'Laravel', category: 'Backend', sortOrder: 14 },
            { name: 'PostgreSQL', category: 'Databases', sortOrder: 15 },
            { name: 'MySQL', category: 'Databases', sortOrder: 16 },
            { name: 'MongoDB', category: 'Databases', sortOrder: 17 },
            { name: 'MS SQL', category: 'Databases', sortOrder: 18 },
            { name: 'Docker', category: 'DevOps', sortOrder: 19 },
            { name: 'Git', category: 'Tools', sortOrder: 20 },
            { name: 'GraphQL', category: 'Tools', sortOrder: 21 },
            { name: 'Prisma', category: 'Tools', sortOrder: 22 },
          ],
        },
        experience: {
          create: [
            {
              company: 'Simform',
              companyUrl: 'https://www.simform.com/',
              position: 'Веб-разработчик',
              startDate: new Date('2022-06-01'),
              endDate: new Date('2026-02-01'),
              description:
                'Участие в создании и поддержке веб-сайтов и внутренних инструментов компании.',
              achievements: [
                'Верстал адаптивные HTML/CSS макеты под различные устройства и браузеры',
                'Дорабатывал клиентский функционал на JavaScript и jQuery',
                'Помогал в разработке backend-части на PHP / Laravel',
                'Работал с MySQL: проектирование и оптимизация запросов',
                'Использовал Git для совместной работы над проектами',
              ],
              sortOrder: 1,
            },
          ],
        },
        projects: {
          create: [
            {
              name: 'Personal Website',
              description: 'Персональный сайт-портфолио',
              url: 'https://nikitadev-website.vercel.app',
              repoUrl: 'https://github.com/Nikitadev-prog',
              sortOrder: 1,
            },
            {
              name: 'Digital Business Card API',
              description:
                'GraphQL API визитки: профиль, навыки, опыт и проекты на NestJS + Prisma',
              repoUrl: 'https://github.com/Nikitadev-prog/digital-card',
              sortOrder: 2,
            },
          ],
        },
      },
    });

    this.logger.log('Seed completed');
  }
}
