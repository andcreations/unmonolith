import { User } from '@unmonolith/users-common';

export class ReadUserByEmailV1Request {
  public email: string;
}

export class ReadUserByEmailV1Response {
  public user: User;
}