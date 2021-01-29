import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserModel,
  UserSchema,
} from '@/infrastructure/adapter/persisters/mongoose/UserModel.entity';
import { UserModelRepository } from '@/infrastructure/adapter/persisters/mongoose/UserModel.repository';
import { UserDITokens } from '@/core/domain/user';
import { CreateUserService } from '@/core/service/user/CreateUserService';
import { FindUserByIdService } from '@/core/service/user/FindUserByIdService';
import { CreateUserMutation } from '../graphql/mutations/create-user-mutation';
import { FindUserByIdQuery } from '../graphql/resolvers/user/find-user-by-id-query';

const PersisterProviders: Provider[] = [
  {
    provide: UserDITokens.UserRepositoryToken,
    useClass: UserModelRepository,
  },
];

const UseCaseProviders: Provider[] = [
  {
    provide: UserDITokens.CreateUserUseCase,
    inject: [UserDITokens.UserRepositoryToken],
    useFactory: userRepository => new CreateUserService(userRepository),
  },
  {
    provide: UserDITokens.FindUserByIdUseCase,
    inject: [UserDITokens.UserRepositoryToken],
    useFactory: userRepository => new FindUserByIdService(userRepository),
  },
];

const ResolversProviders: Provider[] = [CreateUserMutation, FindUserByIdQuery];

const MongooseModuleImport = MongooseModule.forFeature([
  { name: UserModel.name, schema: UserSchema },
]);

@Module({
  imports: [MongooseModuleImport],
  providers: [
    ...PersisterProviders,
    ...UseCaseProviders,
    ...ResolversProviders,
  ],
  exports: [UserDITokens.UserRepositoryToken],
})
export class UserModule {}
