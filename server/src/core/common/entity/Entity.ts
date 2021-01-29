import { Code } from '@/core/common/code/Code';
import { Exception } from '@/core/common/exception/Exception';
import { Optional } from '@/core/common/type/CommonTypes';
import {
  ClassValidationDetails,
  ClassValidator,
} from '@/core/common/util/class-validator/ClassValidator';

export class Entity<T extends string | number> {
  protected id: Optional<T>;

  public getId(): T {
    if (typeof this.id === 'undefined') {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        message: `${this.constructor.name}: O ID está vazio.`,
      });
    }

    return this.id;
  }

  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> = await ClassValidator.validate(
      this,
    );

    if (details) {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        message: 'Erro ao validar entidade',
        data: details,
      });
    }
  }
}
