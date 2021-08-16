import { Test, TestingModule } from '@nestjs/testing';
import { RakController } from './rak.controller';

describe('RakController', () => {
  let controller: RakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RakController],
    }).compile();

    controller = module.get<RakController>(RakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
