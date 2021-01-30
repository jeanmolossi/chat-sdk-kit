import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure.module';
import { UserModule } from './user.module';

@Module({
  imports: [InfrastructureModule, UserModule],
})
export class AppModule {}
