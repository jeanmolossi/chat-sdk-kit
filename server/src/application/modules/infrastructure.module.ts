import { Global, Module } from '@nestjs/common';
import { EnvironmentModule } from '@/infrastructure/config/environment/environment.module';
import { GraphqlModule } from '@/infrastructure/graphql/graphql.module';
import HelloWorld from '../graphql/resolvers/hello-world';

@Global()
@Module({
  imports: [EnvironmentModule, GraphqlModule],
  providers: [HelloWorld],
})
export class InfrastructureModule {}
