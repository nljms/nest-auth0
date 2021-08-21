import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCats(): string {
    return 'Hello cats!';
  }

  getDogs(): string {
    return 'Hello dogs!';
  }
}
