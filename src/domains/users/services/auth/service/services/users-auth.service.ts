import { Injectable, UnauthorizedException } from '@nestjs/common';
import { v4 } from 'uuid';
import { Context } from '@unmonolith/common';
import {
  UsersManagerRequestTransporter,
} from '@unmonolith/users-manager-service-api';
import {
  SignInV1Request,
  SignInV1Response,
} from '@unmonolith/users-auth-service-api';

import { UsersAuthEventTransporter } from '../transporters';

@Injectable()
export class UsersAuthService {
  public constructor(
    private readonly usersManagerRequestTransporter:
      UsersManagerRequestTransporter,
    private readonly usersAuthEventTransporter:
      UsersAuthEventTransporter,
  ) {}

  public async signIn(
    request: SignInV1Request,
    context: Context,
  ): Promise<SignInV1Response> {
    const {
      user
    } = await this.usersManagerRequestTransporter.readUserByEmailV1(
      { email: request.email },
      context,
    );
    if (user.password !== request.password) {
      throw new UnauthorizedException('Invalid password');
    }

    await this.usersAuthEventTransporter.userSignedInV1(
      { 
        userId: user.id, 
        email: user.email,
      },
      context,
    );

    return {
      accessToken: v4(),
    };
  }
}