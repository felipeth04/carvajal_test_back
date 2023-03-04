import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos';

@Controller('user')
export class UserController {
  @Get()
  getMany() {
    return 'ok';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    console.log(id);
    return {
      message: 'get one',
    };
  }

  @Post()
  createUser() {}

  @Put()
  updateUser() {}

  @Delete()
  deleteUser() {}
}
