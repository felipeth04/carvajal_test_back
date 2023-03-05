/* eslint-disable prettier/prettier */
import { IsString, MaxLength, IsOptional, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(255)
  firstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  SecondName: string;

  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  @MinLength(8)
  @MaxLength(255)
  password: string;

}
