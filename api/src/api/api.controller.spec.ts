import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { IndexDto } from './api.dto';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    apiController = app.get<ApiController>(ApiController);
  });

  describe('root', () => {
    const index: IndexDto = { index: 5 };
    it('should return "Hello World!"', () => {
      expect(apiController.getRequestIndex(index)).toBe(index);
    });
  });
});
