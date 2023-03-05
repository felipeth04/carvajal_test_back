import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getAllUsers() {
    return await this.userRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) throw new NotFoundException('El usuario no existe');
    return user;
  }

  async createUserAccount(dto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (userExist)
      throw new BadRequestException('El usuario ya esta registrado');

    const newUser = this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;
  }

  async updateUserData(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) throw new NotFoundException('El usuario no existe');
    const updatedUser = Object.assign(user, dto);
    return await this.userRepository.save(updatedUser);
  }

  async deleteUserAccount(id: number) {
    return await this.userRepository.delete(id);
  }
}
