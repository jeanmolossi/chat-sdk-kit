import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SendMessageMutation } from '@/application/graphql/mutations';
import {
  MessageModel,
  MessageModelRepositoryAdapter,
  MessageSchema,
} from '@/infrastructure/adapter/persisters/mongoose';
import { MessageDITokens } from '@/core/domain/message';
import { SendMessageService } from '@/core/service/message/usecase/SendMessageService';
import { MessageSentSubscription } from '../graphql/subscriptions';

const PersistersProviders: Provider[] = [
  {
    provide: MessageDITokens.MessageRepository,
    useClass: MessageModelRepositoryAdapter,
  },
];

const UseCaseProviders: Provider[] = [
  {
    provide: MessageDITokens.SendMessageUseCase,
    inject: [MessageDITokens.MessageRepository],
    useFactory: messageRepository => new SendMessageService(messageRepository),
  },
];

const ResolversProviders: Provider[] = [
  SendMessageMutation,
  MessageSentSubscription,
];

@Module({
  providers: [
    ...UseCaseProviders,
    ...PersistersProviders,
    ...ResolversProviders,
  ],
  exports: [MessageDITokens.MessageRepository],
})
export class MessageModule {}
