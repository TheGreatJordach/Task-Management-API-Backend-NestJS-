import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestDbConfig } from "../configuration/test-db.config";
import { NeonDatabaseService } from "./neon-database.service";

@Module({
  imports: [TypeOrmModule.forRoot(TestDbConfig)],
  providers: [NeonDatabaseService],
})
export class DatabaseModule {}
