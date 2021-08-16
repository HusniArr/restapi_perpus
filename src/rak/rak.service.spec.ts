import { Test, TestingModule } from '@nestjs/testing';
import { RakService } from './rak.service';

describe('RakService', () => {
  let service: RakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RakService],
    }).compile();

    service = module.get<RakService>(RakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
