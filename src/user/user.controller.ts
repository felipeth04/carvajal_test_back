import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUserAccount(@Body() dto: CreateUserDto) {
    return this.userService.createUserAccount(dto);
  }

  @Put(':id')
  async updateUserData(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.updateUserData(id, dto);
  }

  @Delete(':id')
  async deleteUserAccount(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUserAccount(id);
  }
}
