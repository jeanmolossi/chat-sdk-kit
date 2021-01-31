import { Field, ObjectType } from '@nestjs/graphql';
import { v4 } from 'uuid';
import { MessageUseCaseDTO } from '@/core/domain/message';
import { CoreApiResponseType } from '../common';

@ObjectType()
export class MessageDTOAdapter implements MessageUseCaseDTO {
  @Field(() => String, {
    nullable: false,
    description: 'Id da mensagem',
    defaultValue: v4(),
  })
  id: string;

  @Field(() => String, { nullable: false, description: 'Texto da mensagem' })
  text: string;

  @Field(() => String, {
    nullable: false,
    description: 'Usuário que enviou a mensagem',
  })
  user: string;

  @Field(() => String, {
    nullable: true,
    description: 'Data de criação da mensagem',
  })
  created_at?: Date;

  @Field(() => String, {
    nullable: true,
    description: 'Data de edição da mensagem',
  })
  updated_at?: Date;
}

@ObjectType()
export class MessageResponseData extends CoreApiResponseType {
  @Field(() => MessageDTOAdapter, {
    nullable: true,
    description: 'Dados da mensagem',
  })
  data: MessageDTOAdapter;
}
