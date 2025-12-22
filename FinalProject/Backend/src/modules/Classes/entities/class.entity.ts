import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Student } from '../../Student/entities/Student.entity';

@Entity({ schema: 'school', name: 'class' })
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  numOfPlaces: number;

  @ManyToMany(() => Student, (student) => student.classes)
  students: Student[];
}
