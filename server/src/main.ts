import { NestFactory } from '@nestjs/core';
import { ServerApplication } from '@/application/ServerApplication';

async function bootstrap() {
  const app = await NestFactory.create({});
  await app.listen(3000);
}
bootstrap();
