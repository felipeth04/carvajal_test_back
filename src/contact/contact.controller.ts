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
import { ContactService } from './contact.service';
import { CreateContactDto, UpdateContactDto } from './dtos';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getAllContacts() {
    return await this.contactService.getAllContacts();
  }

  @Get(':id')
  async getContactById(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.getContactById(id);
  }

  @Post()
  async createContact(@Body() dto: CreateContactDto) {
    return this.contactService.createContact(dto);
  }

  @Put(':id')
  async updateContact(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateContactDto,
  ) {
    return this.contactService.updateContact(id, dto);
  }

  @Delete(':id')
  async deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.deleteContact(id);
  }
}
