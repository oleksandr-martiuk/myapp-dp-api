import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_NAME, PORT } from '../configs/configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => {
    console.log(`${APP_NAME} is listening on port ${PORT}`);
  });
}
bootstrap();
