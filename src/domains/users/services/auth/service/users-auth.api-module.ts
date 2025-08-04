import { Module } from '@nestjs/common';
import { HTTPRequestTransporter } from '@unmonolith/transport';

import { UsersAuthService } from './services';
import { UsersAuthController } from './controllers';
import { UsersCrudAPIModule } from '../../crud/service-api';

@Module({
  imports: [
    UsersCrudAPIModule.forRoot({
      requestTransporter: HTTPRequestTransporter.forFeature({
        host: 'localhost',
        port: 8080,
      }),
    }),
  ],
  providers: [
    UsersAuthService,
    UsersAuthController,
  ],
  exports: [],
})
export class UsersAuthModule {}