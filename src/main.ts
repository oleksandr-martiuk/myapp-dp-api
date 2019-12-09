// tslint:disable:no-console

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from '../configs/configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => {
    console.log('Server is listening on port %s', PORT);
  });
}
bootstrap();
