import { Optional } from '@/core/common';
import { User } from '../../entity/User';

export interface IUserRepositoryPort {
  createUser: (user: User) => Promise<User>;
  findUserById: (userId: string) => Promise<Optional<User>>;
}
