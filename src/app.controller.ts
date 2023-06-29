import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/guards/auth/auth.guard';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get('testProtected')
  @UseGuards(AuthGuard)
  getProtected() {
    return { message: 'protected message' }
  }


}
