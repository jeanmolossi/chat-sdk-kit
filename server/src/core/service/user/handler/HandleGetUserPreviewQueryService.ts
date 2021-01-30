import { Optional } from '@/core/common';
import {
  GetUserPreviewQuery,
  GetUserPreviewQueryHandler,
  GetUserPreviewQueryResult,
  IUserRepositoryPort,
  User,
} from '@/core/domain/user';

export class HandleGetUserPreviewQueryService
  implements GetUserPreviewQueryHandler {
  constructor(private readonly userRepository: IUserRepositoryPort) {}

  async handle(
    query: GetUserPreviewQuery,
  ): Promise<Optional<GetUserPreviewQueryResult>> {
    const { by, options } = query;

    let queryResult: Optional<GetUserPreviewQueryResult>;

    const user: Optional<User> = await this.userRepository.findUser(
      by,
      options,
    );

    const { id, name, photo } = user.getUser();

    if (user) {
      queryResult = GetUserPreviewQueryResult.new({ id, name, photo });
    }

    return queryResult;
  }
}
