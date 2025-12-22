// create-user.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Class } from 'src/modules/Classes/entities/class.entity';
import { User } from 'src/modules/User/entities/User.entity';

export class StudentDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  user: User;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  profession: string;

  classes: Class[];
}
