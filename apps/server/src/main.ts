import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5052',
      package: 'hello',
      protoPath: resolve(__dirname, '..', '..', '..', 'hello.proto'),
    }
  });

  await app.listenAsync();
}
bootstrap();
