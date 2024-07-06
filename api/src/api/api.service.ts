import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor() {}

  getIndex(index: number): number {
    return index;
  }
}
