import { Injectable } from '@nestjs/common';
import { APP_VERSION } from '../configs/configs';

@Injectable()
export class AppService {
  getVersion(): string {
    return APP_VERSION;
  }
}
