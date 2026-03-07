import { Module } from '@nestjs/common';

import { UserManagerModule } from './services/manager';
import { UsersAuthModule, UsersAuthGWModule } from './services/auth';

@Module({
  imports: [UserManagerModule, UsersAuthModule, UsersAuthGWModule],
  providers: [],
  exports: [],
})
export class UsersModule {} 