import { Module } from '@nestjs/common';
import { ReadOnlyUserService } from './read/read-only.user.service';
import { WriteUserService } from './write/write.user.service';

@Module({
  providers: [ReadOnlyUserService, WriteUserService]
})
export class UsersModule {}
