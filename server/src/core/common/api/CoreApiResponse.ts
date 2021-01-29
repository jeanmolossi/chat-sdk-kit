import { Code } from '../code/Code';
import { Nullable } from '../type/CommonTypes';

export class CoreApiResponse<T> {
  public readonly statusCode: number;

  public readonly message: string;

  public readonly timestamp: number;

  public readonly data: Nullable<T>;

  private constructor(code: number, message: string, data?: T) {
    this.statusCode = code;
    this.message = message;
    this.data = data;
    this.timestamp = Date.now();
  }

  public static success<SuccessType>(
    data?: SuccessType,
    code?: number,
    message?: string,
  ): CoreApiResponse<SuccessType> {
    const resultCode: number = code || Code.SUCCESS.code;
    const resultMessage: string = message || Code.SUCCESS.message;

    return new CoreApiResponse(resultCode, resultMessage, data || null);
  }

  public static error<ErrType>(
    code?: number,
    message?: string,
    data?: ErrType,
  ): CoreApiResponse<ErrType> {
    const resultCode: number = code || Code.INTERNAL_SERVER_ERROR.code;
    const resultMessage: string = message || Code.INTERNAL_SERVER_ERROR.message;

    return new CoreApiResponse(resultCode, resultMessage, data || null);
  }
}
