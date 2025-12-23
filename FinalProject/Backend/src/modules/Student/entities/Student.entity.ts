import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { User } from '../../User/entities/User.entity';
import { SchoolClass } from '../../Classes/entities/class.entity';

@Entity({ schema: 'school', name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  age: number;

  @Column()
  profession: string;

  @ManyToMany(() => SchoolClass, (classEntity) => classEntity.students)
  @JoinTable({
    name: 'studentclasses', // <-- your actual table name
    joinColumn: { name: 'studentId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'classId', referencedColumnName: 'id' },
  })
  classes: SchoolClass[];
}
