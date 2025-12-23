import { Controller, Logger } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('class')
export class ClassController {
  private readonly logger = new Logger(ClassesService.name);

  constructor(private readonly classService: ClassesService) {}
}
