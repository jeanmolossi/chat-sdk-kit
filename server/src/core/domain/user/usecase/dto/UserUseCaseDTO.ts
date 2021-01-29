import { Exclude, Expose, plainToClass } from 'class-transformer';
import { User } from '../../entity/User';

@Exclude()
export class UserUseCaseDTO {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  photo: string;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;

  static newFromUser(user: User): UserUseCaseDTO {
    const dto: UserUseCaseDTO = plainToClass(UserUseCaseDTO, user);

    return dto;
  }

  static newFromUserList(users: User[]): UserUseCaseDTO[] {
    return users.map(user => this.newFromUser(user));
  }
}
