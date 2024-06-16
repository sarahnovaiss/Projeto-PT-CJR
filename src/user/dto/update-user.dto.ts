import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsBase64,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString({ message: 'Departament must be a string' })
  @IsOptional()
  department?: string;

  @IsString({ message: 'Course must be a string' })
  @IsOptional()
  course?: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsOptional()
  password?: string;

  @IsBase64()
  @IsOptional()
  photo?: string;
}
