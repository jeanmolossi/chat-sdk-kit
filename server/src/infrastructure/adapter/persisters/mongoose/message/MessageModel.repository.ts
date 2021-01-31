import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMessageRepositoryPort, Message } from '@/core/domain/message';
import { MessageDocument, MessageModel } from './MessageModel.entity';
import { MessageModelMapper } from './MessageModel.mapper';

@Injectable()
export class MessageModelRepositoryAdapter implements IMessageRepositoryPort {
  constructor(
    @InjectModel(MessageModel.name)
    private messageModel: Model<MessageDocument>,
  ) {}

  async sendMessage(message: Message): Promise<Message> {
    const newMessage = new this.messageModel(message);

    await newMessage.save();

    return MessageModelMapper.toDomainEntity(newMessage);
  }
}
