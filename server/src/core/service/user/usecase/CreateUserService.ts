import { Code, CoreAssert, Exception } from '@/core/common';
import {
  ICreateUserPayload,
  ICreateUserUseCase,
  IUserRepositoryPort,
  User,
  UserUseCaseDTO,
} from '@/core/domain/user';

export class CreateUserService implements ICreateUserUseCase {
  constructor(private readonly userRepository: IUserRepositoryPort) {}

  async execute(port?: ICreateUserPayload): Promise<UserUseCaseDTO> {
    const user: User = await User.new(port);

    const issetUser = await this.userRepository.findUserById(user.getId());

    CoreAssert.isFalse(
      !!issetUser,
      Exception.new({
        code: Code.ENTITY_ALREADY_EXISTS_ERROR,
        message: 'Usuário já cadastrado',
      }),
    );

    const createdUser = await this.userRepository.createUser(user);

    return UserUseCaseDTO.newFromUser(createdUser);
  }
}
