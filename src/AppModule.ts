import { Module } from '@nestjs/common';
import { UsersModule } from './domains/users';

@Module({
  imports: [UsersModule],
  providers: [],
  exports: [],
})
export class AppModule {}