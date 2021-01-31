import { Field, InputType } from '@nestjs/graphql';
import { v4 } from 'uuid';
import { ISendMessageUseCasePort } from '@/core/domain/message';

@InputType()
export class SendMessageInput implements ISendMessageUseCasePort {
  @Field(() => String, {
    description: 'O identificador deve ser um id válido',
    defaultValue: v4(),
    nullable: false,
  })
  id?: string;

  @Field(() => String, { description: 'O texto da mensagem', nullable: false })
  text: string;

  @Field(() => String, {
    description: 'O usuário que está enviando a mensagem',
    nullable: false,
  })
  user: string;

  @Field(() => Date, {
    description: 'Data de envio da mensagem',
    nullable: true,
  })
  created_at?: Date;

  @Field(() => Date, {
    description: 'Data de atualização da mensagem',
    nullable: true,
  })
  updated_at?: Date;
}
