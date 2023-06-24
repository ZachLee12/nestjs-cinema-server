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
  NotFoundException
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('profile')
  getOneUser(@Request() request) {
    return request.user
  }

  @Post()
  async addUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    const addedUser = await this.usersService.addUser(createUserDto)
    return addedUser
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
