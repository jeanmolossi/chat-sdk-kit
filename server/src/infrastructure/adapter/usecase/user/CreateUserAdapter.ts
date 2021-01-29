import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
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
  @Field(() => String, { nullable: true })
  id?: string;

  @Expose()
  @IsString({ message: 'O nome deve ser válido' })
  @Field(() => String, { nullable: false })
  name: string;

  @Expose()
  @IsUrl({}, { message: 'A Foto deve ser uma url válida' })
  @IsOptional()
  @Field(() => String, { nullable: true })
  photo?: string;

  @Expose()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Expose()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  updated_at?: Date;

  static async new(payload: ICreateUserUsePort): Promise<CreateUserAdapter> {
    const adapter: CreateUserAdapter = plainToClass(CreateUserAdapter, payload);

    await adapter.validate();

    return adapter;
  }
}
