import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          ttl: config.get('RATE_TTL') || 1000,
          limit: config.get('RATE_LIMIT') || 50,
          // errorMessage: HttpStatus.TOO_MANY_REQUESTS,
        },
      ],
    }),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
