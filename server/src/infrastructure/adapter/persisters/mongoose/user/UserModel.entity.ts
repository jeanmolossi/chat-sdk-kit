import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { Optional } from '@/core/common';
import { UserRole } from '@/core/common/enums/UserRole';
import { UserType } from '@/core/domain/user';

export type UserDocument = UserModel & Document;

@Schema()
export class UserModel implements UserType.IModel {
  @Prop({ type: String, default: v4() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: String })
  photo: Optional<string>;

  @Prop({ type: String })
  role: Optional<UserRole>;

  @Prop()
  created_at?: Date;

  @Prop()
  updated_at?: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
