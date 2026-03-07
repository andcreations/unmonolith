import { Module } from '@nestjs/common';

import { UserManagerModule } from './services/manager';
import { UsersAuthModule, UsersAuthGWModule } from './services/auth';
import { UsersLoggerModule } from './services/logger';

@Module({
  imports: [
    UserManagerModule,
    UsersAuthModule,
    UsersAuthGWModule,
    UsersLoggerModule,
  ],
  providers: [],
  exports: [],
})
export class UsersModule {} 