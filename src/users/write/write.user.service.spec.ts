import { Test, TestingModule } from '@nestjs/testing';
import { WriteUserService } from './write.user.service';

describe('WriteUserService', () => {
  let service: WriteUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WriteUserService],
    }).compile();

    service = module.get<WriteUserService>(WriteUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
