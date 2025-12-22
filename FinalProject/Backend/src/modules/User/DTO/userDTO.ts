// create-user.dto.ts
import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  @Length(2, 30)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Length(2, 30)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @Length(2, 30)
  @IsNotEmpty()
  password: string;
}

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @Length(2, 30)
  @IsNotEmpty()
  password: string;
}
