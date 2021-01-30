import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { IEventBusPort } from '@/core/common';

@Injectable()
export class NestEventBusAdapter implements IEventBusPort {
  constructor(private readonly eventBus: EventBus) {}
  sendEvent<TEvent>(event: TEvent): Promise<void> {
    return this.eventBus.publish(event);
  }
}
