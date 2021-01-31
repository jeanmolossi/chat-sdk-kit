import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MessageModel,
  MessageModelRepositoryAdapter,
  MessageSchema,
} from '@/infrastructure/adapter/persisters/mongoose';
import { MessageDITokens } from '@/core/domain/message';
import { SendMessageService } from '@/core/service/message/usecase/SendMessageService';

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

const ResolversProviders: Provider[] = [];

const MongooseModuleImport = MongooseModule.forFeature([
  { name: MessageModel.name, schema: MessageSchema },
]);

@Module({
  imports: [MongooseModuleImport],
  providers: [
    ...UseCaseProviders,
    ...PersistersProviders,
    ...ResolversProviders,
  ],
  exports: [MessageDITokens.MessageRepository],
})
export class MessageModule {}