import { Resolver, Query } from '@nestjs/graphql';
import { HelloWorldData } from '@/infrastructure/adapter/graphql/hello-world/HelloWorldData';
import { CoreApiResponse } from '@/core/common/api/CoreApiResponse';

@Resolver()
export default class HelloWorld {
  @Query(() => HelloWorldData, {
    name: 'helloWorld',
    description: 'Mensagem de Hello World',
    nullable: false,
  })
  helloWorld(): CoreApiResponse<string> {
    return CoreApiResponse.success('Hello World!');
  }
}
