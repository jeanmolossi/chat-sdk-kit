import { QueryBus } from '@nestjs/cqrs';
import { IQueryBusPort } from '@/core/common';

export class NestQueryBusAdapter implements IQueryBusPort {
  constructor(private readonly queryBus: QueryBus) {}

  sendQuery<TQuery, TQueryResult>(query: TQuery): Promise<TQueryResult> {
    return this.queryBus.execute(query);
  }
}
