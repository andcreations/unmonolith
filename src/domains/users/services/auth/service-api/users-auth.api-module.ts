import { DynamicModule, Module, Type } from '@nestjs/common';
import { resolveRequestTransporter } from '@unmonolith/transport';

import { USERS_AUTH_DOMAIN, USERS_AUTH_SERVICE } from './domain-and-service';
import { USERS_AUTH_TRANSPORTER_TOKEN } from './inject-tokens';
import { UsersAuthRequestTransporter } from './users-auth.request-transporter';

export interface UsersAuthAPIModuleOptions {}

@Module({})
export class UsersAuthAPIModule {
  public static forRoot(options: UsersAuthAPIModuleOptions): DynamicModule {
    return {
      module: UsersAuthAPIModule,
      imports: [],
      controllers: [],
      providers: [
        {
          provide: USERS_AUTH_TRANSPORTER_TOKEN,
          useValue: resolveRequestTransporter(
            USERS_AUTH_DOMAIN,
            USERS_AUTH_SERVICE,
          ),
        },
        UsersAuthRequestTransporter,
      ],
      exports: [
        UsersAuthRequestTransporter,
      ],
    };
  }
}