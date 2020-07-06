import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  const logger = new Logger("Bootstrap")

  try {
    await app.listen(port);
  } catch (error) {
    logger.error(`App failed ${error}`)
  }
  
  logger.log(`App started on port ${port}`)
}
bootstrap();
