import { Exclude, Expose, plainToClass } from 'class-transformer';
import { Optional } from '@/core/common';
import { MessageType } from '../../entity/common-types';
import { Message } from '../../entity/Message';

@Exclude()
export class MessageUseCaseDTO implements MessageType.IMessageModel {
  @Expose()
  text: string;

  @Expose()
  user: string;

  @Expose()
  created_at?: Optional<Date>;

  @Expose()
  updated_at?: Optional<Date>;

  static newFromMessage(message: Message): MessageUseCaseDTO {
    const dto: MessageUseCaseDTO = plainToClass(MessageUseCaseDTO, message);

    return dto;
  }

  static newFromMessageList(messages: Message[]): MessageUseCaseDTO[] {
    return messages.map(message => this.newFromMessage(message));
  }
}
