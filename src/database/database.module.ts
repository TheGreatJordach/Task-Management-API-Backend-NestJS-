import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestDbConfig } from "../configuration/test-db.config";

@Module({
  imports: [TypeOrmModule.forRoot(TestDbConfig)],
})
export class DatabaseModule {}
