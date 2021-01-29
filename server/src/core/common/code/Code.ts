export type CodeDescription = {
  code: number;
  message: string;
};

export class Code {
  public static SUCCESS: CodeDescription = {
    code: 200,
    message: 'OK',
  };

  public static CREATED: CodeDescription = {
    code: 201,
    message: 'Created',
  };

  public static BAD_REQUEST_ERROR: CodeDescription = {
    code: 400,
    message: 'Bad request.',
  };

  public static ENTITY_ALREADY_EXISTS_ERROR: CodeDescription = {
    code: 400,
    message: 'Entity already exists.',
  };

  public static UNAUTHORIZED_ERROR: CodeDescription = {
    code: 401,
    message: 'Unauthorized request',
  };

  public static WRONG_CREDENTIALS_ERROR: CodeDescription = {
    code: 402,
    message: 'Wrong credentials',
  };

  public static ACCESS_DANIED_ERROR: CodeDescription = {
    code: 403,
    message: 'Acess danied',
  };

  public static NOT_FOUND_ERROR: CodeDescription = {
    code: 404,
    message: 'Entity not found.',
  };

  public static INTERNAL_SERVER_ERROR: CodeDescription = {
    code: 500,
    message: 'Internal server error.',
  };

  public static ENTITY_VALIDATION_ERROR: CodeDescription = {
    code: 1001,
    message: 'Entity validation error.',
  };

  public static USE_CASE_PORT_VALIDATION_ERROR: CodeDescription = {
    code: 1002,
    message: 'Use-case port validation error',
  };
}
