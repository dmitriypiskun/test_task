import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiService } from './api.service';
import { IndexDto } from './api.dto';
import { RandomDelayInterceptor } from '../interceptors/random-delay.interceptor';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  @UseInterceptors(RandomDelayInterceptor)
  getRequestIndex(@Query() query: IndexDto) {
    return this.apiService.getIndex(query.index);
  }
}
