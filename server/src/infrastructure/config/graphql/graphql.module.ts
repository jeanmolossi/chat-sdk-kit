import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { join } from 'path';

const OtherProviders: Provider[] = [
  {
    provide: 'PUB_SUB',
    useValue: new PubSub(),
  },
];

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/core/common/graphql/schema.gql'),
      cacheControl: false,
    }),
  ],
  providers: [...OtherProviders],
  exports: ['PUB_SUB'],
})
export class GraphqlModule {}
