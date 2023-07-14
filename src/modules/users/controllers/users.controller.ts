import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ValidationPipe,
  UseGuards,
  Request,
  NotFoundException,
  UsePipes
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthGuard } from '../../auth/guards/auth/auth.guard';
import { EncryptionPipe } from '../pipes/encryption/encryption.pipe';

@Controller('protected/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Get('testConnection')
  getTestResponse() {
    return { message: 'users endpoint' }
  }

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.usersService.getUsers()
  }

  @Get(':username')
  @UseGuards(AuthGuard)
  getOneUser(@Param('username') username: string) {
    return this.usersService.findOne(username)
  }

  @Post()
  @UsePipes(new ValidationPipe(), new EncryptionPipe())
  async addUser(@Body() createUserDto: CreateUserDto): Promise<{ message: string } | Error> {
    try {
      const user = await this.usersService.create(createUserDto)
      return { message: `user [${user.id}] created` }
    } catch (err) {
      throw err
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.usersService.deleteOne(id)
    return { message: `user [${id}]  deleted` };
  }
}
