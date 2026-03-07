import { Injectable } from '@nestjs/common';
import { UsersEventLogger } from '../types';

@Injectable()
export class ConsoleUsersEventLogger implements UsersEventLogger {
  public async logEvent(type: string, data: object): Promise<void> {
    console.log(`[event] Caught event ${type}`);
    console.log(JSON.stringify(data, null, 2));
  }
}