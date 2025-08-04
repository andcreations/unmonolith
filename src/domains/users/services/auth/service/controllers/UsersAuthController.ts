import { RequestHandler, TransportController } from '@unmonolith/transport';

import { UsersAuthService } from '../services';
import { UsersAuthTopics } from '../../service-api/users-auth.topics';
import { SignInV1Request, SignInV1Response } from '../../service-api/dtos';
import { Context } from '../../../../../../common';

@TransportController()
export class UsersAuthController {
  public constructor(
    private readonly usersAuthService: UsersAuthService,
  ) {}

  @RequestHandler(UsersAuthTopics.signInV1)
  public async signInV1(
    request: SignInV1Request,
    context: Context,
  ): Promise<SignInV1Response> {
    return this.usersAuthService.signIn(request, context);
  }
}