import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Logger } from '@nestjs/common';

const PORT = 3000;
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  logger.log(`App Listening on port : ${PORT}`);
}
bootstrap();
