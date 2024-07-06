import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getDelayInRange } from 'src/utils';

@Injectable()
export class ApiService {
  constructor(private readonly config: ConfigService) {}

  async getRequestIndex(index: number): Promise<number> {
    const min = this.config.get('DELAY_MIN');
    const max = this.config.get('DELAY_MAX');
    const delay = getDelayInRange(min, max);

    const promise: Promise<number> = new Promise(resolve => {
      setTimeout(() => resolve(index), delay);
    });

    return await promise;
  }
}
