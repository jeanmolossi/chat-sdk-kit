import { Inject, Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Optional } from '@/core/common';
import {
  GetUserPreviewQuery,
  GetUserPreviewQueryHandler,
  GetUserPreviewQueryResult,
  UserDITokens,
} from '@/core/domain/user';

@Injectable()
@QueryHandler(GetUserPreviewQuery)
export class NestWrapperGetUserPreviewQueryHandler implements IQueryHandler {
  constructor(
    @Inject(UserDITokens.GetUserPreviewQueryHandler)
    private readonly handleService: GetUserPreviewQueryHandler,
  ) {}

  execute(
    query: GetUserPreviewQuery,
  ): Promise<Optional<GetUserPreviewQueryResult>> {
    return this.handleService.handle(query);
  }
}
