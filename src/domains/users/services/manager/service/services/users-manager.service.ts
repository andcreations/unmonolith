import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import {
  CreateUserV1Request,
  CreateUserV1Response,
  ReadUserByEmailV1Request,
  ReadUserByEmailV1Response,
  ReadUserV1Request,
  ReadUserV1Response,
} from '@unmonolith/users-manager-service-api';

import { UsersManagerRepository } from '../repositories';

@Injectable()
export class UsersManagerService {
  public constructor(
    private readonly usersManagerRepository: UsersManagerRepository,
  ) {}

  public async createUser(
    request: CreateUserV1Request,
    context: Context,
  ): Promise<CreateUserV1Response> {
    return this.usersManagerRepository.createUser(request.user, context);
  }

  public async readUser(
    request: ReadUserV1Request,
    context: Context,
  ): Promise<ReadUserV1Response> {
    const user = await this.usersManagerRepository.readUser(request.id, context);
    return { user };
  }

  public async readUserByEmail(
    request: ReadUserByEmailV1Request,
    context: Context,
  ): Promise<ReadUserByEmailV1Response> {
    const user = await this.usersManagerRepository.readUserByEmail(
      request.email,
      context,
    );
    return { user };
  }
}