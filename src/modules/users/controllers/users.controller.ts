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
import { AuthGuard } from '../../auth/guards/auth.guard';
import { EncryptionPipe } from '../pipes/encryption/encryption.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('testConnection')
  getTestResponse() {
    return { message: 'users endpoint' }
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }

  @Get(':username')
  @UseGuards(AuthGuard)
  getOneUser(@Param('username') username: string) {
    return this.usersService.getOneUser(username)
  }

  @Post()
  @UsePipes(new ValidationPipe(), new EncryptionPipe())
  async addUser(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.addUser(createUserDto)
    } catch (err) {
      throw err
    }
    return { message: 'user created' }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      await this.usersService.deleteUser(id)
    } catch (err) {
      throw new NotFoundException(`User ${id} not found.`)
    }
    return id;
  }
}
