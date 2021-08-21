import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [AuthorizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
