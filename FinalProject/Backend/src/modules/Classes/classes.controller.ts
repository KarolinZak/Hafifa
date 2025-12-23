import {
  Controller,
  HttpStatus,
  Res,
  UnauthorizedException,
  Logger,
  Get,
} from '@nestjs/common';
import type { Response } from 'express';
import { ClassesService } from './classes.service';

@Controller('class')
export class ClassController {
  private readonly logger = new Logger(ClassesService.name);

  constructor(private readonly classService: ClassesService) {}
  @Get('all')
  async allClasses(@Res() res: Response) {
    try {
      const { classes } = await this.classService.getAllClasses();
      this.logger.log(`Got all classes`);
      return res.status(HttpStatus.OK).json({ classes });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        this.logger.warn(`Failed to get classes`);
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: error.message });
      }
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(
        `Internal server error while attempting to get classes\nError: ${errorMessage}`,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }
}
