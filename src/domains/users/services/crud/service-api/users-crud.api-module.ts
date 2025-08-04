import { DynamicModule, Module } from '@nestjs/common';
import { RequestTransporter } from '@unmonolith/transport';

import { USERS_CRUD_TRANSPORTER_TOKEN } from './inject-tokens';
import { UsersCrudTransporter } from './users-crud.transporter';

export interface UsersCrudAPIModuleOptions {
  requestTransporter: RequestTransporter;
}

@Module({})
export class UsersCrudAPIModule {
  public static forRoot(options: UsersCrudAPIModuleOptions): DynamicModule {
    return {
      module: UsersCrudAPIModule,
      imports: [],
      controllers: [],
      providers: [
        {
          provide: USERS_CRUD_TRANSPORTER_TOKEN,
          useValue: options.requestTransporter,
        },
        UsersCrudTransporter,
      ],
      exports: [
        UsersCrudTransporter,
      ],
    };
  }
}