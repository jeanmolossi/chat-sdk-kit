import { Field, ObjectType } from '@nestjs/graphql';
import { UserUseCaseDTO } from '@/core/domain/user';

@ObjectType()
export class UserDTOAdapter implements UserUseCaseDTO {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  photo: string;

  @Field(() => String, { nullable: false })
  created_at: Date;

  @Field(() => String, { nullable: false })
  updated_at: Date;
}
