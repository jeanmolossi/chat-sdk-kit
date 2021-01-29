import { Global, Module } from '@nestjs/common';
import { EnvironmentModule } from '@/infrastructure/config/environment/environment.module';
import { GraphqlModule } from '@/infrastructure/graphql/graphql.module';
import { MongooseModule } from '@/infrastructure/mongoose/mongoose.module';
import HelloWorld from '../graphql/resolvers/hello-world';
import { UserModule } from './user.module';

@Global()
@Module({
  imports: [EnvironmentModule, GraphqlModule, MongooseModule, UserModule],
  providers: [HelloWorld],
})
export class InfrastructureModule {}
