import { Resolver, Query, ObjectType, Field } from '@nestjs/graphql';
import { CoreApiResponseType } from '@/infrastructure/graphql/graphql-response-adapter';
import { CoreApiResponse } from '@/core/common/api/CoreApiResponse';

@ObjectType()
class HelloWorldData extends CoreApiResponseType {
  @Field(() => String, { nullable: true })
  data: string;
}

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
