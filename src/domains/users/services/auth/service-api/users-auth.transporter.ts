import { Inject, Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { RequestTransporter } from '@unmonolith/transport';

import { USERS_AUTH_TRANSPORTER_TOKEN } from './inject-tokens';
import { UsersAuthTopics } from './users-auth.topics';
import { SignInV1Request, SignInV1Response } from './dtos';

@Injectable()
export class UsersAuthTransporter {
  public constructor(
    @Inject(USERS_AUTH_TRANSPORTER_TOKEN)
    private readonly transport: RequestTransporter,
  ) {}

  public async signInV1(
    request: SignInV1Request,
    context: Context,
  ): Promise<SignInV1Response> {
    return this.transport.sendRequest<
      SignInV1Request,
      SignInV1Response
    >(UsersAuthTopics.signInV1, request, context);
  }
}