import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const myDataSource: DataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  schema: "mall",
  username: "postgres",
  password: "12345678",
  database: "postgres",
  entities: ["./**/*.entity.ts"],
  logging: true,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
});
