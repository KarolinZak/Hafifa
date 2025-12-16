import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

@Entity({ schema: 'School', name: 'Users' })
@Check(`"mail" ~ '^[\\w.-]+@[\\w.-]+\\.\\w+$'`) // TODO: check regex and add the check on the sepcific column
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // TODO: check input
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mail: string;

  @Column()
  password: string;
}
