import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';
import { UseCaseValidatableAdapter } from '@/core/common';
import { IFindUserByIdUseCasePort } from '@/core/domain/user/port/usecase/FindUserByIdUseCasePort';

@Exclude()
export class FindUserByIdAdapter
  extends UseCaseValidatableAdapter
  implements IFindUserByIdUseCasePort {
  @Expose()
  @IsString({ message: 'O identificador deve ser um valor válido' })
  @IsUUID(4, { message: 'O identificador deve ter o formato válido' })
  id: string;

  static async new(
    payload: IFindUserByIdUseCasePort,
  ): Promise<FindUserByIdAdapter> {
    const adapter: FindUserByIdAdapter = plainToClass(
      FindUserByIdAdapter,
      payload,
    );

    await adapter.validate();

    return adapter;
  }
}
