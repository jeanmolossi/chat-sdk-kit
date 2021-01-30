import { ObjectType, Field } from '@nestjs/graphql';
import { CoreApiResponseType } from '@/infrastructure/config/graphql/graphql-response-adapter';

@ObjectType()
export class HelloWorldData extends CoreApiResponseType {
  @Field(() => String, { nullable: true })
  data: string;
}
