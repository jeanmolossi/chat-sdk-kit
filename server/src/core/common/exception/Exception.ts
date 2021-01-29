import { CodeDescription } from '@/core/common/code/Code';

export type CreateExceptionPayload<T> = {
  code: CodeDescription;
  message?: string;
  data?: T;
};

export class Exception<T> extends Error {
  public readonly code: number;

  public readonly data?: T;

  private constructor(
    codeDescription: CodeDescription,
    message?: string,
    data?: T,
  ) {
    super();

    const { code, message: codeMessage } = codeDescription;

    this.name = this.constructor.name;
    this.code = code;
    this.data = data;
    this.message = message || codeMessage;

    Error.captureStackTrace(this, this.constructor);
  }

  public static new<ExceptionType>(
    payload: CreateExceptionPayload<ExceptionType>,
  ): Exception<ExceptionType> {
    return new Exception(payload.code, payload.message, payload.data);
  }
}
