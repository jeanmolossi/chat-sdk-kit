import { Message } from '@/core/domain/message';

export interface IMessageRepositoryPort {
  sendMessage(message: Message): Promise<Message>;
}
