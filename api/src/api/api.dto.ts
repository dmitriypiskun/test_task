import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class IndexDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  index: number;
}
