import { Module } from '@nestjs/common';
import { LocalRequestTransporter } from '@unmonolith/transport';
import { UsersAuthAPIModule } from '@unmonolith/users-auth-service-api';

import { UsersAuthGWService } from './services';
import { UsersAuthGWController } from './controllers';

@Module({
  imports: [
    UsersAuthAPIModule.forRoot({
      requestTransporter: LocalRequestTransporter.forFeature(),
    }),
  ],
  providers: [
    UsersAuthGWService,
  ],
  controllers: [UsersAuthGWController],
})
export class UsersAuthGWModule {}