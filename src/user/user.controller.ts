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
  async getMany() {
    return await this.userService.getAllContacts();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getContactById(id);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createContact(dto);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.updateContact(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteContact(id);
  }
}
