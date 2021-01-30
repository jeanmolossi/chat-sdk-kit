import { User } from '@/core/domain/user';
import { UserModel } from './UserModel.entity';

export class UserModelMapper {
  static toDomainEntity(userModel: UserModel): User {
    const user = new User(userModel);

    return user;
  }

  static toModelEntity(user: User): UserModel {
    const userModel = new UserModel();

    Object.assign(userModel, user);

    return userModel;
  }

  static toDomainEntities(userModels: UserModel[]): User[] {
    return userModels.map(userModel => this.toDomainEntity(userModel));
  }

  static toModelEntities(users: User[]): UserModel[] {
    return users.map(user => this.toModelEntity(user));
  }
}
