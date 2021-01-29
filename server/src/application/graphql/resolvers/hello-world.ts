import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export default class HelloWorld {
  @Query(() => String!)
  helloWorld() {
    return `Hello World`;
  }
}
