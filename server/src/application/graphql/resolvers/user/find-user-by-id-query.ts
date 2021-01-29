import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserResponseData } from '@/infrastructure/adapter/graphql/user/UserDTOAdapter';
import { FindUserByIdAdapter } from '@/infrastructure/adapter/usecase/user/FindUserByIdAdapter';
import { CoreApiResponse } from '@/core/common';
import {
  UserDITokens,
  UserUseCaseDTO,
  IFindUserByIdUseCase,
} from '@/core/domain/user';

@Resolver()
export class FindUserByIdQuery {
  constructor(
    @Inject(UserDITokens.FindUserByIdUseCase)
    private readonly findUserByIdUseCase: IFindUserByIdUseCase,
  ) {}

  @Query(() => UserResponseData)
  async findUserById(
    @Args({
      name: 'id',
      type: () => String,
      description: 'Identificador único do usuário',
    })
    id: string,
  ): Promise<CoreApiResponse<UserUseCaseDTO>> {
    const adapter: FindUserByIdAdapter = await FindUserByIdAdapter.new({ id });

    const foundUser = await this.findUserByIdUseCase.execute(adapter);

    return CoreApiResponse.success(foundUser);
  }
}
