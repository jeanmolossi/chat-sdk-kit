import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { MessageModule } from './message.module';
import { UserModule } from './user.module';

@Module({
  imports: [InfrastructureModule, UserModule, MessageModule],
})
export class AppModule {}
