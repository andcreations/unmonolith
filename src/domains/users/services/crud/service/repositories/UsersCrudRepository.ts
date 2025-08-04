import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { User } from '@unmonolith/users-common';
import { CreateUserV1Response } from '@unmonolith/users-crud-service-api';

@Injectable()
export class UsersCrudRepository {
  public async createUser(
    user: Omit<User, 'id'>,
    context: Context,
  ): Promise<{ id: string }> {
    return {
      id: '1',
    };
  } 

  public async readUser(
    id: string,
    context: Context,
  ): Promise<User> {
    return {
      id,
      username: 'John',
      password: 'Doe',
      email: 'john-doew@test.com',
    };
  }

  public async readUserByEmail(
    email: string,
    context: Context,
  ): Promise<User> {
    return {
      id: '1',
      username: 'John Doe',
      password: 'user1234',
      email,
    };
  }
}