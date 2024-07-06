import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { IndexDto } from './api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getRequestIndex(@Query() query: IndexDto) {
    return this.apiService.getRequestIndex(query.index);
  }
}
