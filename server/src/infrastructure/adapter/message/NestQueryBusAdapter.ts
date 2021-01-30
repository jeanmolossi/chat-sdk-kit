import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { IQueryBusPort } from '@/core/common';

@Injectable()
export class NestQueryBusAdapter implements IQueryBusPort {
  constructor(private readonly queryBus: QueryBus) {}

  sendQuery<TQuery, TQueryResult>(query: TQuery): Promise<TQueryResult> {
    return this.queryBus.execute(query);
  }
}
