import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { IndexDto } from './api.dto';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [ApiController],
      providers: [ConfigService, ApiService],
    }).compile();

    apiController = app.get<ApiController>(ApiController);
  });

  describe('root', () => {
    const index = 5;
    const requestDto: IndexDto = { index };
    it('should return index: 5', () => {
      expect(apiController.getRequestIndex(requestDto)).toBe(index);
    });
  });
});
