import { Message } from '@/core/domain/message';
import { MessageModel } from './MessageModel.entity';

export class MessageModelMapper {
  static toDomainEntity(messageModel: MessageModel): Message {
    const message: Message = new Message(messageModel);

    return message;
  }

  static toModelEntity(domainMessage: Message): MessageModel {
    const message: MessageModel = new MessageModel();

    Object.assign(message, domainMessage);

    return message;
  }

  static toDomainEntities(messagesModels: MessageModel[]): Message[] {
    return messagesModels.map(messageModel =>
      this.toDomainEntity(messageModel),
    );
  }

  static toModelEntities(domainMessages: Message[]): MessageModel[] {
    return domainMessages.map(domainMessage =>
      this.toModelEntity(domainMessage),
    );
  }
}
