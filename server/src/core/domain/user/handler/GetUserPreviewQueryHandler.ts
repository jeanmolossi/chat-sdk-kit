import { Optional } from '@/core/common';
import { IQueryHandler } from '@/core/common/message/QueryEvent';
import {
  GetUserPreviewQuery,
  GetUserPreviewQueryResult,
} from '@/core/domain/user';

export type GetUserPreviewQueryHandler = IQueryHandler<
  GetUserPreviewQuery,
  Optional<GetUserPreviewQueryResult>
>;
