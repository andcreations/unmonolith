import { Module } from '@nestjs/common';

import { UsersEventLogger } from './types';
import { ConsoleUsersEventLogger } from './services';
import { UsersAuthEventController } from './controllers';

@Module({
  providers: [
    {
      provide: UsersEventLogger,
      useClass: ConsoleUsersEventLogger,
    },
    UsersAuthEventController,
  ],
})
export class UsersLoggerModule {}