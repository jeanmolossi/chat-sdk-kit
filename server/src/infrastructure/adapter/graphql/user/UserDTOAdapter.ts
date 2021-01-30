import { Field, ObjectType } from '@nestjs/graphql';
import { CoreApiResponseType } from '@/infrastructure/adapter/graphql/common';
import { UserUseCaseDTO } from '@/core/domain/user';

@ObjectType()
export class UserDTOAdapter implements UserUseCaseDTO {
  @Field(() => String, {
    nullable: false,
    description: 'Identificador do usuário',
  })
  id: string;

  @Field(() => String, { nullable: false, description: 'Nome do usuário' })
  name: string;

  @Field(() => String, {
    nullable: true,
    description: 'Url da foto de perfil do usuário',
  })
  photo: string;

  @Field(() => Date, {
    nullable: false,
    description: 'Data em que foi criado o usuário (IsoFormat)',
  })
  created_at: Date;

  @Field(() => Date, {
    nullable: false,
    description: 'Data em que foi atualizado o usuário (IsoFormat)',
  })
  updated_at: Date;
}

@ObjectType()
export class UserResponseData extends CoreApiResponseType {
  @Field(() => UserDTOAdapter, {
    nullable: true,
    description: 'Dados do usuário',
  })
  data: UserDTOAdapter;
}
