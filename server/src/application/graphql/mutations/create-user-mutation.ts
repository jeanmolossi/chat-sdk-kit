import { Inject } from '@nestjs/common';
import { Args, Field, Mutation, ObjectType, Resolver } from '@nestjs/graphql';
import { CreateUserAdapter } from '@/infrastructure/adapter/usecase/user/CreateUserAdapter';
import { CoreApiResponseType } from '@/infrastructure/graphql/graphql-response-adapter';
import { CoreApiResponse } from '@/core/common';
import {
  ICreateUserUseCase,
  UserDITokens,
  UserUseCaseDTO,
} from '@/core/domain/user';
import { CreateUserInput } from '../inputs/user/CreateUserInput';

@ObjectType()
class UserResponseData extends CoreApiResponseType {
  @Field(() => CreateUserAdapter)
  data: CreateUserAdapter;
}

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
