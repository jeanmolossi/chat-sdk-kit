import { Nullable, Optional } from '../../type/CommonTypes';

export class CoreAssert {
  /**
   * @param expression Se essa expressão for falsa dispara uma exception
   * @param exception Exception a ser disparada
   */
  public static isTrue(expression: boolean, exception: Error): void {
    if (!expression) {
      throw exception;
    }
  }

  /**
   * @param expression Se essa expressão for verdadeira dispara uma exception
   * @param exception Exception a ser disparada
   */
  public static isFalse(expression: boolean, exception: Error): void {
    if (expression) {
      throw exception;
    }
  }

  /**
   * @param expression Se essa expressão for null || undefined dispara uma exception
   * @param exception Exception a ser disparada
   */
  public static notEmpty<T>(value: Optional<Nullable<T>>, exception: Error): T {
    if (value === null || value === undefined) {
      throw exception;
    }

    return value;
  }
}
