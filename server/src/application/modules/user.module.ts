import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserMutation } from '@/application/graphql/mutations';
import { FindUserByIdQuery } from '@/application/graphql/resolvers/user/find-user-by-id-query';
import {
  UserModel,
  UserSchema,
  UserModelRepository,
} from '@/infrastructure/adapter/persisters/mongoose';
import { NestWrapperGetUserPreviewQueryHandler } from '@/infrastructure/handler/user/NestWrapperGetUserPreviewQueryHandler';
import { UserDITokens } from '@/core/domain/user';
import { HandleGetUserPreviewQueryService } from '@/core/service/user/handler/HandleGetUserPreviewQueryService';
import { CreateUserService } from '@/core/service/user/usecase/CreateUserService';
import { FindUserByIdService } from '@/core/service/user/usecase/FindUserByIdService';

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

const HandlerProviders: Provider[] = [
  NestWrapperGetUserPreviewQueryHandler,
  {
    provide: UserDITokens.GetUserPreviewQueryHandler,
    inject: [UserDITokens.UserRepositoryToken],
    useFactory: userModelRepository =>
      new HandleGetUserPreviewQueryService(userModelRepository),
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
    ...HandlerProviders,
    ...ResolversProviders,
  ],
  exports: [UserDITokens.UserRepositoryToken],
})
export class UserModule {}
