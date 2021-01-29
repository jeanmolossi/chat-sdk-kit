import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserModel & Document;

@Schema()
export class UserModel {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  photo?: string;

  @Prop()
  created_at?: Date;

  @Prop()
  updated_at?: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
