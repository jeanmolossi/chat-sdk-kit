import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
import { v4 } from 'uuid';
import { UseCaseValidatableAdapter } from '@/core/common';
import { ICreateUserUsePort } from '@/core/domain/user';

@Exclude()
@ObjectType()
export class CreateUserAdapter
  extends UseCaseValidatableAdapter
  implements ICreateUserUsePort {
  @Expose()
  @IsUUID(4, { message: 'O Identificador deve ser um uuid v4 válido' })
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Campo identificador gerado automaticamente',
  })
  id?: string = v4();

  @Expose()
  @IsString({ message: 'O nome deve ser válido' })
  @Field(() => String, {
    nullable: false,
    description: 'Campo com o nome do usuário',
  })
  name: string;

  @Expose()
  @IsUrl({}, { message: 'A Foto deve ser uma url válida' })
  @IsOptional()
  @Field(() => String, {
    nullable: true,
    description: 'Campo com a Url da photo do perfil do usuário',
  })
  photo?: string;

  @Expose()
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
    description: 'Campo Date gerado automaticamente',
  })
  created_at?: Date;

  @Expose()
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
    description: 'Campo Date gerado automaticamente',
  })
  updated_at?: Date;

  static async new(payload: ICreateUserUsePort): Promise<CreateUserAdapter> {
    const adapter: CreateUserAdapter = plainToClass(CreateUserAdapter, payload);

    await adapter.validate();

    return adapter;
  }
}
