import { Controller, Get } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { Metadata } from 'grpc';

@Controller()
export class AppController {
  @Client({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5052',
      package: 'hello',
      protoPath: resolve(__dirname, '..', '..', '..', 'hello.proto')
    }
  })
  private client: ClientGrpc;

  @Get()
  getHello(): string {
    const meta = new Metadata();
    meta.set('foo', 'bar');
    return this.client.getService<any>('Hello').sayHello({ name: 'World' }, meta);
  }
}
