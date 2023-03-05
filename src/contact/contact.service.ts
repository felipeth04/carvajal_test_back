import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto, UpdateContactDto } from './dtos';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async getAllContacts(): Promise<Contact[]> {
    const user = await this.contactRepository.find();
    return user;
  }

  async getContactById(id: number) {
    const user = await this.contactRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) throw new NotFoundException('Contacto no encontrado');
    return user;
  }

  async createContact(dto: CreateContactDto) {
    const user = this.contactRepository.create(dto);
    return await this.contactRepository.save(user);
  }

  async updateContact(id: number, dto: UpdateContactDto) {
    const user = await this.contactRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user) throw new NotFoundException('Contacto no encontrado');
    const updatedUser = Object.assign(user, dto);
    return await this.contactRepository.save(updatedUser);
  }

  async deleteContact(id: number) {
    return await this.contactRepository.delete(id);
  }
}
