import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

@Entity({ schema: 'School', name: 'Users' })
@Check(`"mail" ~ '^[\\w.-]+@[\\w.-]+\\.\\w+$'`)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mail: string;

  @Column()
  password: string;
}
