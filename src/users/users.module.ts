import { Module } from '@nestjs/common';
import { ReadOnlyUserService } from './read/read-only.user.service';
import { WriteUserService } from './write/write.user.service';
import { UsersWriteController } from "./write/write.user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user-entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ReadOnlyUserService, WriteUserService],
  controllers:[UsersWriteController]

})
export class UsersModule {}
