import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/core/common/graphql/schema.gql'),
    }),
  ],
})
export class GraphqlModule {}
