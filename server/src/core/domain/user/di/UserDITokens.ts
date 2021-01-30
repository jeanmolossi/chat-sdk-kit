export class UserDITokens {
  static readonly CreateUserUseCase: unique symbol = Symbol(
    'CreateUserUseCase',
  );

  static readonly FindUserByIdUseCase: unique symbol = Symbol(
    'FindUserByIdUseCase',
  );

  static readonly UserRepositoryToken: unique symbol = Symbol(
    'UserRepositoryToken',
  );

  /**@section HANDLER */

  static readonly GetUserPreviewQueryHandler: unique symbol = Symbol(
    'GetUserPreviewQueryHandler',
  );
}
