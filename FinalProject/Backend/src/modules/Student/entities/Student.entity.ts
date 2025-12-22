import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import { User } from '../../User/entities/User.entity';
import { Class } from '../../Classes/entities/class.entity';

@Entity({ schema: 'school', name: 'student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id)
  @Column()
  user: User;

  @Column()
  age: number;

  @Column()
  profession: string;

  @ManyToMany(() => Class, (classEntity) => classEntity.students)
  classes: Class[];
}
