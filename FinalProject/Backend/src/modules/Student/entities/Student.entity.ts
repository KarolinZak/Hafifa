import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { SchoolClass } from '../../Classes/entities/class.entity';

@Entity({ schema: 'school', name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  profession: string;

  @ManyToMany(() => SchoolClass, (classEntity) => classEntity.students)
  @JoinTable({
    name: 'studentclasses',
    joinColumn: { name: 'studentId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'classId', referencedColumnName: 'id' },
  })
  classes: SchoolClass[];
}
