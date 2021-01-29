import { Inject } from '@nestjs/common';
import { Args, Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { UserDTOAdapter } from '@/infrastructure/adapter/graphql/user/UserDTOAdapter';
import { FindUserByIdAdapter } from '@/infrastructure/adapter/usecase/user/FindUserByIdAdapter';
import { CoreApiResponseType } from '@/infrastructure/graphql/graphql-response-adapter';
import { CoreApiResponse } from '@/core/common';
import {
  UserDITokens,
  UserUseCaseDTO,
  IFindUserByIdUseCase,
} from '@/core/domain/user';

@ObjectType()
class UserResponseData extends CoreApiResponseType {
  @Field(() => UserDTOAdapter)
  data: UserDTOAdapter;
}

@Resolver()
export class FindUserByIdQuery {
  constructor(
    @Inject(UserDITokens.FindUserByIdUseCase)
    private readonly findUserByIdUseCase: IFindUserByIdUseCase,
  ) {}

  @Query(() => UserResponseData)
  async findUserById(
    @Args({ name: 'id', type: String }) id: string,
  ): Promise<CoreApiResponse<UserUseCaseDTO>> {
    const adapter: FindUserByIdAdapter = await FindUserByIdAdapter.new({ id });

    const foundUser = await this.findUserByIdUseCase.execute(adapter);

    return CoreApiResponse.success(foundUser);
  }
}
