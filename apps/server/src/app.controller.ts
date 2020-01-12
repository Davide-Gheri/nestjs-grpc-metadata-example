import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from 'grpc';

@Controller()
export class AppController {
  @GrpcMethod('Hello')
  sayHello({ name }: any, meta: Metadata) {
    console.log(meta.getMap());

    return {
      message: `Hello ${name}`,
    }
  }
}
