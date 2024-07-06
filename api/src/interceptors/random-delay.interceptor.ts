import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { getDelayInRange } from '../utils';
import { delay } from 'rxjs/operators';

@Injectable()
export class RandomDelayInterceptor implements NestInterceptor {
  constructor(private readonly config: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const min = this.config.get('DELAY_MIN');
    const max = this.config.get('DELAY_MAX');
    const delayTime = getDelayInRange(min, max);

    return next.handle().pipe(delay(delayTime));
  }
}
