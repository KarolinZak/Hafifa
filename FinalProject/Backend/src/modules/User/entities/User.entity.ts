import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'School', name: 'Users' })
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
