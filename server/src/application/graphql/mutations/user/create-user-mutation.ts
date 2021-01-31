import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '@/application/graphql/inputs';
import { UserResponseData } from '@/infrastructure/adapter/graphql/user/UserDTOAdapter';
import { CreateUserAdapter } from '@/infrastructure/adapter/usecase/user/CreateUserAdapter';
import { CoreApiResponse } from '@/core/common';
import {
  ICreateUserUseCase,
  UserDITokens,
  UserUseCaseDTO,
} from '@/core/domain/user';

@Resolver()
export class CreateUserMutation {
  constructor(
    @Inject(UserDITokens.CreateUserUseCase)
    private readonly createUserUseCase: ICreateUserUseCase,
  ) {}

  @Mutation(() => UserResponseData, { name: 'createUser' })
  async createUser(
    @Args({ name: 'user', type: () => CreateUserInput })
    createUserInput: CreateUserInput,
  ): Promise<CoreApiResponse<UserUseCaseDTO>> {
    const userAdapter: CreateUserAdapter = await CreateUserAdapter.new(
      createUserInput,
    );

    const createdUser = await this.createUserUseCase.execute(userAdapter);

    return CoreApiResponse.success(createdUser);
  }
}
