import { Module } from '@nestjs/common';

import { UsersManagerRepository } from './repositories';
import { UsersManagerService } from './services';
import { UsersManagerController } from './controllers';

@Module({
  imports: [],
  providers: [
    UsersManagerService,
    UsersManagerRepository,
    UsersManagerController,
  ],
  exports: [],
})
export class UserManagerModule {}