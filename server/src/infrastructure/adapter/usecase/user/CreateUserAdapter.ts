import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
import { v4 } from 'uuid';
import { UseCaseValidatableAdapter } from '@/core/common';
import { ICreateUserUsePort } from '@/core/domain/user';

@Exclude()
export class CreateUserAdapter
  extends UseCaseValidatableAdapter
  implements ICreateUserUsePort {
  @Expose()
  @IsUUID(4, { message: 'O Identificador deve ser um uuid v4 válido' })
  @IsOptional()
  id?: string = v4();

  @Expose()
  @IsString({ message: 'O nome deve ser válido' })
  name: string;

  @Expose()
  @IsUrl({}, { message: 'A Foto deve ser uma url válida' })
  @IsOptional()
  photo?: string;

  @Expose()
  @IsOptional()
  created_at?: Date;

  @Expose()
  @IsOptional()
  updated_at?: Date;

  static async new(payload: ICreateUserUsePort): Promise<CreateUserAdapter> {
    const adapter: CreateUserAdapter = plainToClass(CreateUserAdapter, payload);

    await adapter.validate();

    return adapter;
  }
}
