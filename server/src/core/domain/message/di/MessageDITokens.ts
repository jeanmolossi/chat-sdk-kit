export class MessageDITokens {
  /**@section USECASES */
  static readonly SendMessageUseCase: unique symbol = Symbol(
    'SendMessageUseCase',
  );

  /**@section PERSISTERS */
  static readonly MessageRepository: unique symbol = Symbol(
    'MessageRepository',
  );
}
