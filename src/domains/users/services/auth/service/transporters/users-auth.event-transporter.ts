import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { EventTransporter } from '@unmonolith/transport';
import { 
  UsersAuthEventTopics,
  UserSignedInV1Event,
} from '@unmonolith/users-auth-service-api';

@Injectable()
export class UsersAuthEventTransporter {
  public constructor(
    private readonly eventTransporter: EventTransporter,
  ) {}

  public async userSignedInV1(
    event: UserSignedInV1Event,
    context: Context,
  ): Promise<void> {
    await this.eventTransporter.sendEvent(
      UsersAuthEventTopics.userSignedInV1,
      event,
      context,
    );
  }
}