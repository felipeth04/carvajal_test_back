import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UserService {
  getMany() {}
  getOne(id: number) {}
  createUser(dto: CreateUserDto) {}
  updateUser(id: number, dto: UpdateUserDto) {}
  deleteUser(id: number) {}
}
