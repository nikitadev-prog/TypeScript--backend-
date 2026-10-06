import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HealthController } from './health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    }),
    PrismaModule,
    ProfileModule,
    SeedModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
