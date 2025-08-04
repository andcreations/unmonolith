import { Module } from '@nestjs/common';

import { UsersCrudRepository } from './repositories';
import { UsersCrudService } from './services';
import { UsersCrudController } from './controllers';

@Module({
  imports: [],
  providers: [
    UsersCrudService,
    UsersCrudRepository,
    UsersCrudController,
  ],
  exports: [],
})
export class UserCrudModule {}