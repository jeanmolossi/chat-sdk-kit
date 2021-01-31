import { IsDate, IsOptional, IsString } from 'class-validator';
import { v4 } from 'uuid';
import { Entity, Optional } from '@/core/common';
import { MessageType } from './common-types';
import { ICreateMessagePayload } from './common-types/CreateMessagePayload';

export class Message
  extends Entity<string>
  implements MessageType.IMessageModel {
  @IsString({ message: 'O campo de texto deve ser um texto válido' })
  text: string;

  @IsString({ message: 'Deve conter um usuário, que enviou a mensagem' })
  user: string;

  @IsDate()
  @IsOptional()
  created_at?: Optional<Date>;

  @IsDate()
  @IsOptional()
  updated_at?: Optional<Date>;

  constructor({
    id = v4(),
    text,
    user,
    created_at = new Date(),
    updated_at = new Date(),
  }: ICreateMessagePayload) {
    super();

    this.id = id;
    this.text = text;
    this.user = user;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static async new(payload: ICreateMessagePayload): Promise<Message> {
    const message: Message = new Message(payload);

    await message.validate();

    return message;
  }
}
