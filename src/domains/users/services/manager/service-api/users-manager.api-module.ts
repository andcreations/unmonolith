import { DynamicModule, Module } from '@nestjs/common';
import { resolveRequestTransporter } from '@unmonolith/transport';

import { 
  USERS_MANAGER_DOMAIN,
  USERS_MANAGER_SERVICE,
} from './domain-and-service';
import { USERS_MANAGER_TRANSPORTER_TOKEN } from './inject-tokens';
import {
  UsersManagerRequestTransporter,
} from './users-manager.request-transporter';

export interface UsersManagerAPIModuleOptions {}

@Module({})
export class UsersManagerAPIModule {
  public static forRoot(options: UsersManagerAPIModuleOptions): DynamicModule {
    return {
      module: UsersManagerAPIModule,
      imports: [],
      controllers: [],
      providers: [
        {
          provide: USERS_MANAGER_TRANSPORTER_TOKEN,
          useValue: resolveRequestTransporter(
            USERS_MANAGER_DOMAIN,
            USERS_MANAGER_SERVICE,
          ),
        },
        UsersManagerRequestTransporter,
      ],
      exports: [
        UsersManagerRequestTransporter,
      ],
    };
  }
}