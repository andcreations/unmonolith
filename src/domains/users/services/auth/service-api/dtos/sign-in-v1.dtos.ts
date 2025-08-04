import { User } from '@unmonolith/users-common';

export class SignInV1Request {
  public email: string;
  public password: string;
}

export class SignInV1Response {
  public accessToken: string;
}