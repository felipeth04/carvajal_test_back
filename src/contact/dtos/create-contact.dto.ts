/* eslint-disable prettier/prettier */
import { IsString, IsArray } from 'class-validator';

export class CreateContactDto {
  @IsString()
  firstName: string;
  @IsString()
  secondName: string;
  @IsString()
  lastName: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  address: string;
  @IsString()
  homePhone: string;
  @IsArray()
  @IsString({ each: true })
  tags: string[];
}