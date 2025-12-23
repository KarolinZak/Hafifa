import { ClassController } from './classes.controller';
import { ClassesService } from './classes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolClass } from './entities/class.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolClass])],
  controllers: [ClassController],
  providers: [ClassesService],
})
export class ClassesModule {}
