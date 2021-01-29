import { Field, InputType } from '@nestjs/graphql';
import { ICreateUserUsePort } from '@/core/domain/user';

@InputType()
export class CreateUserInput implements ICreateUserUsePort {
  @Field(() => String, {
    nullable: true,
    description: 'Não precisa enviar, será gerado automáticamente',
  })
  id?: string;

  @Field(() => String, {
    nullable: false,
    description: 'Campo com o nome do usuário',
  })
  name: string;

  @Field(() => String, {
    nullable: true,
    description: 'Url da foto de perfil do usuário',
  })
  photo?: string;

  @Field(() => Date, {
    nullable: true,
    description: 'Campo Date gerado automaticamente',
  })
  created_at?: Date;

  @Field(() => Date, {
    nullable: true,
    description: 'Campo Date gerado automaticamente',
  })
  updated_at?: Date;
}
