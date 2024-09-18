import { Test, TestingModule } from '@nestjs/testing';
import { ReadOnlyUserService } from './read-only.user.service';

describe('ReadOnlyUserService', () => {
  let service: ReadOnlyUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadOnlyUserService],
    }).compile();

    service = module.get<ReadOnlyUserService>(ReadOnlyUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
