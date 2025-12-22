// create-user.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Student } from 'src/modules/Student/entities/Student.entity';

export class StudentDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  numOfPlaces: number;
  students: Student[];
}
