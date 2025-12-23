import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolClass } from './entities/class.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(SchoolClass)
    private readonly schoolClassRepository: Repository<SchoolClass>,
  ) {}

  async getAllClasses(): Promise<{ classes: SchoolClass[] }> {
    const classes = await this.schoolClassRepository.find({
      relations: ['students'],
    });

    if (!classes) {
      throw new UnauthorizedException();
    }

    return { classes };
  }
}
