import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { User } from '@unmonolith/users-common';

@Injectable()
export class UsersManagerRepository {
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
      email: 'john.doew@example.com',
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