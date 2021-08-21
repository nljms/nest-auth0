import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/dogs')
  getDogs(): string {
    return this.appService.getDogs();
  }

  @Get('/cats')
  @UseGuards(AuthorizationGuard)
  getCats(): string {
    return this.appService.getCats();
  }
}
