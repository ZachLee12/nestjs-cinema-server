import {
  Controller,
  Get,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/guards/auth/auth.guard';
import { AuthService } from './modules/auth/services/auth.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService
  ) { }

  @Get('testConnection')
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get('protected/testConnection')
  @UseGuards(AuthGuard)
  getProtected() {
    return { message: 'The right credentials and the right tokens! Good job!' }
  }

  @Get('protected/verifyRefreshToken')
  async verifyRefreshToken(@Headers() headers: any) {
    return this.authService.verifyRefreshToken(headers.refreshtoken)
  }

}
