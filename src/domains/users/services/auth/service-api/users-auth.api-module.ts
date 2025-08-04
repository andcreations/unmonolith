import { DynamicModule, Module, Type } from '@nestjs/common';
import { RequestTransporter } from '@unmonolith/transport';

import { USERS_AUTH_TRANSPORTER_TOKEN } from './inject-tokens';
import { UsersAuthTransporter } from './users-auth.transporter';

export interface UsersAuthAPIModuleOptions {
  requestTransporter: RequestTransporter;
}

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
          useValue: options.requestTransporter,
        },
        UsersAuthTransporter,
      ],
      exports: [
        UsersAuthTransporter,
      ],
    };
  }
}