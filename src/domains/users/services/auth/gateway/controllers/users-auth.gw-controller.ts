import { Controller, Post, Body  } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { GWContext } from '@unmonolith/gateway-common';

import { SignInV1GWRequest, SignInV1GWResponse } from '../dtos';
import { UsersAuthGWService } from '../services';

@Controller('/api/users/auth')
export class UsersAuthGWController {
  public constructor(
    private readonly usersAuthGWService: UsersAuthGWService,
  ) {}

  @Post('/sign-in/v1')
  public async signInV1(
    @Body() body: SignInV1GWRequest,
    @GWContext() context: Context,
  ): Promise<SignInV1GWResponse> {
    return this.usersAuthGWService.signInV1(body, context);
  }
}