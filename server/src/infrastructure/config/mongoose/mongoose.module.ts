import { Module } from '@nestjs/common';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';
import {
  MessageModel,
  MessageSchema,
  UserModel,
  UserSchema,
} from '@/infrastructure/adapter/persisters/mongoose';

const MongooseModuleImport = NestMongooseModule.forFeature([
  { name: UserModel.name, schema: UserSchema },
  { name: MessageModel.name, schema: MessageSchema },
]);

@Module({
  imports: [
    NestMongooseModule.forRoot('mongodb://localhost/chat-sdk'),
    MongooseModuleImport,
  ],
  exports: [NestMongooseModule],
})
export class MongooseModule {}
