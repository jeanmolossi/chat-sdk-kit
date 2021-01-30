import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ICommandBusPort } from '@/core/common/port/message/CommandBusPort';

@Injectable()
export class NestCommandBusAdapter implements ICommandBusPort {
  constructor(private readonly commandBus: CommandBus) {}

  async sendCommand<TCommand>(command: TCommand): Promise<void> {
    return this.commandBus.execute(command);
  }
}
