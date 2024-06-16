import {
  IsEmail,
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsBase64,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Departament must be a string' })
  @IsNotEmpty({ message: 'Departament is required' })
  department: string;

  @IsString({ message: 'Course must be a string' })
  @IsNotEmpty({ message: 'Course is required' })
  course: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsBase64()
  @IsOptional({ message: 'Photo is optional' })
  photo: string;
}
