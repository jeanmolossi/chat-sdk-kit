import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserModel,
  UserSchema,
} from '@/infrastructure/adapter/persisters/mongoose/UserModel.entity';
import { UserModelRepository } from '@/infrastructure/adapter/persisters/mongoose/UserModel.repository';
import { UserDITokens } from '@/core/domain/user';
import { CreateUserService } from '@/core/service/user/CreateUserService';
import { CreateUserMutation } from '../graphql/mutations/create-user-mutation';

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
];

const ResolversProviders: Provider[] = [CreateUserMutation];

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
