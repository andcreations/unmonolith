import { Module } from '@nestjs/common';
import { LocalRequestTransporter } from '@unmonolith/transport';
import { UsersManagerAPIModule } from '@unmonolith/users-manager-service-api';

import { UsersAuthService } from './services';
import { UsersAuthRequestController } from './controllers';

@Module({
  imports: [
    UsersManagerAPIModule.forRoot({}),
  ],
  providers: [
    UsersAuthService,
    UsersAuthRequestController,
  ],
  exports: [],
})
export class UsersAuthModule {}