import { IQueryBy, Optional, RepositoryOptions } from '@/core/common';
import { User } from '@/core/domain/user';

export interface IUserRepositoryPort {
  createUser: (user: User) => Promise<User>;
  findUser(by: IQueryBy, options?: RepositoryOptions.FindOptions);
  findUserById: (userId: string) => Promise<Optional<User>>;
}
