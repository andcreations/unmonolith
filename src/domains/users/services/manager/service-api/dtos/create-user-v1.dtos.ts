import { User } from '@unmonolith/users-common';

export class CreateUserV1Request {
  public user: Omit<User, 'id'>;
}

export class CreateUserV1Response {
  public id: string;
}