import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cors from 'cors';
import { AppModule } from '@/application/modules/app.module';
import { EnvironmentService } from '@/infrastructure/config/environment/environment.service';

const myCors = cors();

export class ServerApplication {
  private constructor(
    private readonly environmentService: EnvironmentService,
  ) {}

  public async run(): Promise<void> {
    const port = this.environmentService.get('API_PORT');
    const app: NestExpressApplication = await NestFactory.create(AppModule);

    this.buildAPIDocumentation(app);
    app.use(myCors);

    await app.listen(port);
  }

  buildAPIDocumentation(app: NestExpressApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Easy Chat Sdk')
      .setDescription('A Api do EasyChat')
      .setVersion('1.0.0')
      .addTag('Easy chat main')
      .setLicense(
        'MIT',
        'https://github.com/jeanmolossi/chat-sdk-kit/blob/main/LICENCE.md',
      )
      .addBearerAuth({
        name: 'JWT Token',
        in: 'Authorization',
        type: 'apiKey',
      })
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documentation', app, document);
  }

  public static new(): ServerApplication {
    const environmentService = new EnvironmentService();
    return new ServerApplication(environmentService);
  }
}
