import { Exclude, Expose, plainToClass } from 'class-transformer';
import { UserRole } from '@/core/common/enums/UserRole';
import { UserType } from '../../entity/common-types';
import { User } from '../../entity/User';

@Exclude()
export class UserUseCaseDTO implements UserType.IModel {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  photo: string;

  @Expose()
  role: UserRole;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;

  static newFromUser(user: User): UserUseCaseDTO {
    const dto: UserUseCaseDTO = plainToClass(UserUseCaseDTO, user);

    dto.id = user.getId();

    return dto;
  }

  static newFromUserList(users: User[]): UserUseCaseDTO[] {
    return users.map(user => this.newFromUser(user));
  }
}
