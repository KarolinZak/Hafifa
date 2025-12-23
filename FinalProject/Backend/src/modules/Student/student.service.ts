import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../Student/entities/Student.entity';
import { SchoolClass } from '../Classes/entities/class.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async getAllClasses(studentId: number): Promise<{ classes: SchoolClass[] }> {
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
      relations: ['classes', 'classes.students'],
    });

    if (!student) {
      throw new UnauthorizedException();
    }

    return { classes: student.classes };
  }
}
