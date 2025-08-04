import { Injectable, UnauthorizedException } from '@nestjs/common';
import { v4 } from 'uuid';
import { Context } from '@unmonolith/common';
import { UsersCrudTransporter } from '@unmonolith/users-crud-service-api';
import {
  SignInV1Request,
  SignInV1Response,
} from '@unmonolith/users-auth-service-api';

@Injectable()
export class UsersAuthService {
  public constructor(
    private readonly usersCrudTransporter: UsersCrudTransporter,
  ) {}

  public async signIn(
    request: SignInV1Request,
    context: Context,
  ): Promise<SignInV1Response> {
    const response = await this.usersCrudTransporter.readUserByEmailV1(
      { email: request.email },
      context,
    );
    if (response.user.password !== request.password) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: v4(),
    };
  }
}