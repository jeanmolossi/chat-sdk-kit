import { Global, Module } from '@nestjs/common';
import { EnvironmentModule } from '@/infrastructure/config/environment/environment.module';
import { GraphqlModule } from '@/infrastructure/graphql/graphql.module';

@Global()
@Module({
  imports: [EnvironmentModule, GraphqlModule],
})
export class InfrastructureModule {}
