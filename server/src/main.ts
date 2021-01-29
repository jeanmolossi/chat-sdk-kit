import { ServerApplication } from '@/application/ServerApplication';

async function bootstrap() {
  const serverApplication: ServerApplication = ServerApplication.new();
  serverApplication.run();
}

bootstrap();
