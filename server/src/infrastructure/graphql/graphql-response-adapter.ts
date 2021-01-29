import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreApiResponseType {
  @Field(() => Int, { nullable: false })
  statusCode: number;

  @Field(() => String, { nullable: false })
  message: string;

  @Field(() => Float, { nullable: false })
  timestamp: number;
}
