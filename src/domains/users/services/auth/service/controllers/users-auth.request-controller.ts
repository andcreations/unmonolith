import { Context } from '@unmonolith/common';
import { RequestHandler, RequestController } from '@unmonolith/transport';
import { 
  UsersAuthRequestTopics,
  SignInV1Request,
  SignInV1Response,
} from '@unmonolith/users-auth-service-api';

import { UsersAuthService } from '../services';

@RequestController()
export class UsersAuthRequestController {
  public constructor(
    private readonly usersAuthService: UsersAuthService,
  ) {}

  @RequestHandler(UsersAuthRequestTopics.signInV1)
  public async signInV1(
    request: SignInV1Request,
    context: Context,
  ): Promise<SignInV1Response> {
    return this.usersAuthService.signIn(request, context);
  }
}