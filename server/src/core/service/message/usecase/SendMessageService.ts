import {
  ICreateMessagePayload,
  IMessageRepositoryPort,
  Message,
  MessageUseCaseDTO,
  SendMessageUseCase,
} from '@/core/domain/message';

export class SendMessageService implements SendMessageUseCase {
  constructor(private readonly messageRepository: IMessageRepositoryPort) {}

  async execute(port?: ICreateMessagePayload): Promise<MessageUseCaseDTO> {
    const message: Message = await Message.new(port);

    const newMessage = await this.messageRepository.sendMessage(message);

    return MessageUseCaseDTO.newFromMessage(newMessage);
  }
}
