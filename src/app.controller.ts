import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/guards/auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('testConnection')
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get('protected/testProtected')
  @UseGuards(AuthGuard)
  getProtected() {
    return { message: 'protected message' }
  }

}
