import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllContacts(): Promise<User[]> {
    const user = await this.userRepository.find();
    return user;
  }

  async getContactById(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('Contacto no encontrado');
    return user;
  }

  async createContact(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);
    return await this.userRepository.save(user);
  }

  async updateContact(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('Contacto no encontrado');
    const updatedUser = Object.assign(user, dto);
    return await this.userRepository.save(updatedUser);
  }

  async deleteContact(id: number) {
    return await this.userRepository.delete(id);
  }
}
