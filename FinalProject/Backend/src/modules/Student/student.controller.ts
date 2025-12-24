import {
  Controller,
  Body,
  HttpStatus,
  Res,
  UnauthorizedException,
  Logger,
  Get,
  Query,
} from '@nestjs/common';
import type { Response } from 'express';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  private readonly logger = new Logger(StudentService.name);

  constructor(private readonly studentService: StudentService) {}
  @Get('classes')
  async allClasses(
    @Query('studentId') studentId: number,
    @Res() res: Response,
  ) {
    console.log('Received studentId:', studentId);
    try {
      const { classes } = await this.studentService.getAllClasses(studentId);
      this.logger.log(`Got all classes for student ID: ${studentId}`);
      return res.status(HttpStatus.OK).json({ classes });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        this.logger.warn(`Failed to get classes for student ID: ${studentId}`);
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: error.message });
      }
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(
        `Internal server error while attempting to get classes for student ID: ${studentId}\nError: ${errorMessage}`,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }
}
