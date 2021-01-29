import { Module, Provider } from '@nestjs/common';
import { UserModel } from '@/infrastructure/adapter/persisters/mongoose/UserModel.entity';
import { UserDITokens } from '@/core/domain/user';
import { CreateUserService } from '@/core/service/user/CreateUserService';
import { CreateUserMutation } from '../graphql/mutations/create-user-mutation';

const PersisterProviders: Provider[] = [];

const UseCaseProviders: Provider[] = [
  UserModel,
  {
    provide: UserDITokens.CreateUserUseCase,
    inject: [UserModel.name],
    useFactory: userRepository => new CreateUserService(userRepository),
  },
];

const ResolversProviders: Provider[] = [CreateUserMutation];

@Module({
  providers: [
    ...PersisterProviders,
    ...UseCaseProviders,
    ...ResolversProviders,
  ],
  exports: [UserModel.name],
})
export class UserModule {}
