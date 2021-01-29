import { Module } from '@nestjs/common';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NestMongooseModule.forRoot('mongodb://localhost/chat-sdk')],
})
export class MongooseModule {}
