import { Module } from '@nestjs/common';

import { UserCrudModule } from './services/crud';
import { UsersAuthModule, UsersAuthGWModule } from './services/auth';

@Module({
  imports: [UserCrudModule, UsersAuthModule, UsersAuthGWModule],
  providers: [],
  exports: [],
})
export class UsersModule {} 