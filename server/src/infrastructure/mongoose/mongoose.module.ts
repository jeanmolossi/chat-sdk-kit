import { Module } from '@nestjs/common';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';
import {
  UserModel,
  UserSchema,
} from '../adapter/persisters/mongoose/UserModel.entity';

@Module({
  imports: [
    NestMongooseModule.forRoot('mongodb://localhost/chat-sdk'),
    NestMongooseModule.forFeature([
      { name: UserModel.name, schema: UserSchema },
    ]),
  ],
})
export class MongooseModule {}
