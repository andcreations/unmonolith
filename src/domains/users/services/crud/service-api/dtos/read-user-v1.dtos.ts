import { User } from '@unmonolith/users-common';

export class ReadUserV1Request {
  public id: string;
}

export class ReadUserV1Response {
  public user: User;
}