import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';
import { v4 } from 'uuid';
import { UseCaseValidatableAdapter } from '@/core/common';
import { ISendMessageUseCasePort } from '@/core/domain/message';

@Exclude()
export class SendMessageAdapter
  extends UseCaseValidatableAdapter
  implements ISendMessageUseCasePort {
  @Expose()
  @IsUUID(4, { message: 'O Identificador deve ser um uuid v4 válido' })
  @IsOptional()
  id?: string = v4();

  @Expose()
  @IsString({ message: 'O campo de texto deve ser um texto válido' })
  text: string;

  @Expose()
  @IsString({ message: 'Deve conter um usuário, que enviou a mensagem' })
  user: string;

  @Expose()
  @IsDate()
  @IsOptional()
  created_at?: Date;

  @Expose()
  @IsDate()
  @IsOptional()
  updated_at?: Date;

  static async new(
    payload: ISendMessageUseCasePort,
  ): Promise<SendMessageAdapter> {
    const adapter: SendMessageAdapter = plainToClass(
      SendMessageAdapter,
      payload,
    );

    await adapter.validate();

    return adapter;
  }
}
