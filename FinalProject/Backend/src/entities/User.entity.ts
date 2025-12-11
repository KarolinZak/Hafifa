import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ schema: "School", name: "Users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  mail: string;

  @Column()
  password: string;
}