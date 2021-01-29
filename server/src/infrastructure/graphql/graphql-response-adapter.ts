import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CoreApiResponseType {
  @Field(() => Int, {
    nullable: false,
    description: 'Campo com o código de status da resposta da requisição',
  })
  statusCode: number;

  @Field(() => String, {
    nullable: false,
    description: 'Mensagem de feedback da requisição',
  })
  message: string;

  @Field(() => Float, {
    nullable: false,
    description: 'Unix timestamp do momento da requisição',
  })
  timestamp: number;
}
