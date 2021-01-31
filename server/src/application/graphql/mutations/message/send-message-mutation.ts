import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SendMessageInput } from '@/application/graphql/inputs/message/SendMessageInput';
import { MessageResponseData } from '@/infrastructure/adapter/graphql/message/MessageDTOAdapter';
import { SendMessageAdapter } from '@/infrastructure/adapter/usecase/message/SendMessageAdapter';
import { CoreApiResponse } from '@/core/common';
import {
  MessageDITokens,
  MessageUseCaseDTO,
  SendMessageUseCase,
} from '@/core/domain/message';

@Resolver()
export class SendMessageMutation {
  constructor(
    @Inject(MessageDITokens.SendMessageUseCase)
    private readonly sendMessageUseCase: SendMessageUseCase,
  ) {}

  @Mutation(() => MessageResponseData)
  async sendMessage(
    @Args({
      type: () => SendMessageInput,
      description: 'Corpo da mensagem',
      name: 'message',
    })
    message: SendMessageInput,
  ): Promise<CoreApiResponse<MessageUseCaseDTO>> {
    const adapter: SendMessageAdapter = await SendMessageAdapter.new(message);

    const sentMessage = await this.sendMessageUseCase.execute(adapter);

    return CoreApiResponse.success(sentMessage);
  }
}
