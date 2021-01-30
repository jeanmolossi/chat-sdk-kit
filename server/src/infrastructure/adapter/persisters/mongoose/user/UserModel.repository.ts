import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IQueryBy, Optional, RepositoryOptions } from '@/core/common';
import { IUserRepositoryPort, User } from '@/core/domain/user';
import { UserDocument, UserModel } from './UserModel.entity';
import { UserModelMapper } from './UserModel.mapper';

@Injectable()
export class UserModelRepository implements IUserRepositoryPort {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
  ) {}

  async createUser(user: User): Promise<User> {
    const createdUser = new this.userModel(user);

    await createdUser.save();

    return UserModelMapper.toDomainEntity(createdUser);
  }

  async findUserById(userId: string): Promise<Optional<User>> {
    const foundUser = await this.userModel.findById(userId).exec();

    if (!foundUser) return undefined;

    return UserModelMapper.toDomainEntity(foundUser);
  }

  async findUser(by: IQueryBy, options?: RepositoryOptions.FindOptions) {
    let domainUser: Optional<User>;

    const user = await this.userModel.findOne(by, options);

    if (user) {
      domainUser = UserModelMapper.toDomainEntity(user);
    }

    return domainUser;
  }
}
