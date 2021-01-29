import { Field, InputType } from '@nestjs/graphql';
import { ICreateUserUsePort } from '@/core/domain/user';

@InputType()
export class CreateUserInput implements ICreateUserUsePort {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: true })
  photo?: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  updated_at?: Date;
}
