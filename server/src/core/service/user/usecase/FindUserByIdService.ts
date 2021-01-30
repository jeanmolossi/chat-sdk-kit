import { Code, CoreAssert, Exception } from '@/core/common';
import { IUserRepositoryPort, UserUseCaseDTO } from '@/core/domain/user';
import { IFindUserByIdUseCasePort } from '@/core/domain/user/port/usecase/FindUserByIdUseCasePort';
import { IFindUserByIdUseCase } from '@/core/domain/user/usecase/FindUserByIdUseCase';

export class FindUserByIdService implements IFindUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepositoryPort) {}

  async execute(port: IFindUserByIdUseCasePort): Promise<UserUseCaseDTO> {
    const user = await this.userRepository.findUserById(port.id);

    CoreAssert.isTrue(
      !!user,
      Exception.new({
        code: Code.NOT_FOUND_ERROR,
        message: 'Usuário não encontrado',
      }),
    );

    return UserUseCaseDTO.newFromUser(user);
  }
}
