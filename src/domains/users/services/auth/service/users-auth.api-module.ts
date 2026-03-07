import { Module } from '@nestjs/common';
import { 
  EventTransporter,
  resolveEventTransporter,
} from '@unmonolith/transport';
import { UsersManagerAPIModule } from '@unmonolith/users-manager-service-api';
import {
  USERS_AUTH_DOMAIN,
  USERS_AUTH_SERVICE,
} from '@unmonolith/users-auth-service-api';

import { UsersAuthEventTransporter } from './transporters';
import { UsersAuthService } from './services';
import { UsersAuthRequestController } from './controllers';

@Module({
  imports: [
    UsersManagerAPIModule.forRoot({}),
  ],
  providers: [
    {
      provide: EventTransporter,
      useValue: resolveEventTransporter(
        USERS_AUTH_DOMAIN,
        USERS_AUTH_SERVICE,
      ),
    },
    UsersAuthEventTransporter,
    UsersAuthService,
    UsersAuthRequestController,
  ],
  exports: [],
})
export class UsersAuthModule {}