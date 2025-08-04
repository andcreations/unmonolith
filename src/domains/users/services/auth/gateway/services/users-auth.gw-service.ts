import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { UsersAuthTransporter } from '@unmonolith/users-auth-service-api';
import { SignInV1GWRequest, SignInV1GWResponse } from '../dtos';

@Injectable()
export class UsersAuthGWService {
  public constructor(
    private readonly usersAuthTransporter: UsersAuthTransporter,
  ) {}

  public async signInV1(
    body: SignInV1GWRequest,
    context: Context,
  ): Promise<SignInV1GWResponse> {
    return this.usersAuthTransporter.signInV1(
      {
        email: body.email,
        password: body.password,
      },
      context,
    );
  }
}