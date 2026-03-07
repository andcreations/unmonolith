import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { EventController, EventHandler } from '@unmonolith/transport';
import { 
  UsersAuthEventTopics,
  UserSignedInV1Event,
} from '@unmonolith/users-auth-service-api';

import { UsersEventLogger } from '../types';


@Injectable()
@EventController()
export class UsersAuthEventController {
  public constructor(
    private readonly usersEventLogger: UsersEventLogger,
  ) {}

  @EventHandler(UsersAuthEventTopics.userSignedInV1)
  public async userSignedInV1(
    event: UserSignedInV1Event,
    context: Context,
  ): Promise<void> {
    return this.usersEventLogger.logEvent('user-signed-in-v1', event, context);
  }
}