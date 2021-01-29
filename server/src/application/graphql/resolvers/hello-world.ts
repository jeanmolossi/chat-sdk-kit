import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export default class HelloWorld {
  @Query(() => String!, {
    name: 'helloWorld',
    description: 'Mensagem de Hello World',
    nullable: false,
  })
  helloWorld() {
    return `Hello World`;
  }
}
