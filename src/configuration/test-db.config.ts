import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TestDbConfig : TypeOrmModuleOptions = {
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
  logging: false
}
