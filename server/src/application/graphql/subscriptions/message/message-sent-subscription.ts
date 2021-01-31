import { Inject } from '@nestjs/common';
import { Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { MessageDTOAdapter } from '@/infrastructure/adapter/graphql/message/MessageDTOAdapter';

@Resolver()
export class MessageSentSubscription {
  constructor(
    @Inject('PUB_SUB')
    private readonly pubSub: PubSub,
  ) {}

  @Subscription(() => MessageDTOAdapter, {
    resolve: payload => payload.sentMessage,
  })
  sentMessage() {
    return this.pubSub.asyncIterator('sentMessage');
  }
}
