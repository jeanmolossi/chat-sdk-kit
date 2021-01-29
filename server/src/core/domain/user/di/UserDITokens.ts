export class UserDITokens {
  static readonly CreateUserUseCase: unique symbol = Symbol(
    'CreateUserUseCase',
  );

  static readonly FindUserByIdUseCase: unique symbol = Symbol(
    'FindUserByIdUseCase',
  );
}
