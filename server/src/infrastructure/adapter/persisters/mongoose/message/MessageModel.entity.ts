import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';
import { MessageType } from '@/core/domain/message';

export type MessageDocument = MessageModel & Document;

@Schema()
export class MessageModel implements MessageType.IMessageModel {
  @Prop({ type: String, default: v4() })
  _id: string;

  @Prop()
  text: string;

  @Prop()
  user: string;

  @Prop()
  created_at?: Date;

  @Prop()
  updated_at?: Date;
}

export const MessageSchema = SchemaFactory.createForClass(MessageModel);
