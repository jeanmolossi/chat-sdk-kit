import { ObjectType, Field } from '@nestjs/graphql';
import { CoreApiResponseType } from '@/infrastructure/adapter/graphql/common';

@ObjectType()
export class HelloWorldData extends CoreApiResponseType {
  @Field(() => String, { nullable: true })
  data: string;
}
