import { TypeOrmModuleOptions } from "@nestjs/typeorm"

const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ["dist/**/*.entity.js"],
  synchronize: true,
  logging: true,
  migrations: ["dist/migrations/*.js"],
}

export = typeOrmConfig
