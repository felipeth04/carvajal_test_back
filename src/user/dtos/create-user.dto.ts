/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { IsArray } from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsString()
  firstName: string;
  @IsString()
  SecondName: string;
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
