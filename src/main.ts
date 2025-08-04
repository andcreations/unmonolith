import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './AppModule';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create<
    NestExpressApplication
  >(
    AppModule,
    new ExpressAdapter(),
  );

  app.enableShutdownHooks();
  await app.listen(8080, '0.0.0.0');
}

bootstrap()
  .catch((error) => {
    console.error('Failed to bootstrap', error);
    process.exit(1);
  });
