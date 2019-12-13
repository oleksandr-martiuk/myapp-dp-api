// tslint:disable:no-console

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from '../configs/configs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT, () => {
    console.log('Server is listening on port %s', PORT);
  });
}
bootstrap();
