import { Global, Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NestCommandBusAdapter } from '@/infrastructure/adapter/message/NestCommandBusAdapter';
import { NestEventBusAdapter } from '@/infrastructure/adapter/message/NestEventBusAdapter';
import { NestQueryBusAdapter } from '@/infrastructure/adapter/message/NestQueryBusAdapter';
import { EnvironmentModule } from '@/infrastructure/config/environment/environment.module';
import { GraphqlModule } from '@/infrastructure/config/graphql/graphql.module';
import { MongooseModule } from '@/infrastructure/config/mongoose/mongoose.module';
import { CoreDITokens } from '@/core/common';
import HelloWorld from '../graphql/resolvers/hello-world';

const providers: Provider[] = [
  {
    provide: CoreDITokens.CommandBus,
    useClass: NestCommandBusAdapter,
  },
  {
    provide: CoreDITokens.QueryBus,
    useClass: NestQueryBusAdapter,
  },
  {
    provide: CoreDITokens.EventBus,
    useClass: NestEventBusAdapter,
  },
];

const resolverProviders: Provider[] = [HelloWorld];

@Global()
@Module({
  imports: [CqrsModule, EnvironmentModule, GraphqlModule, MongooseModule],
  providers: [...providers, ...resolverProviders],
  exports: [
    CoreDITokens.CommandBus,
    CoreDITokens.QueryBus,
    CoreDITokens.EventBus,
  ],
})
export class InfrastructureModule {}
