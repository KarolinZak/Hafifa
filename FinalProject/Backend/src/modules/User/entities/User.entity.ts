import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'school', name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  mail: string;

  @Column()
  password: string;
}
