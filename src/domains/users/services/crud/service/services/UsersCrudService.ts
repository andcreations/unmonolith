import { Injectable } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import {
  CreateUserV1Request,
  CreateUserV1Response,
  ReadUserByEmailV1Request,
  ReadUserByEmailV1Response,
  ReadUserV1Request,
  ReadUserV1Response,
} from '@unmonolith/users-crud-service-api';

import { UsersCrudRepository } from '../repositories';

@Injectable()
export class UsersCrudService {
  public constructor(
    private readonly usersCrudRepository: UsersCrudRepository,
  ) {}

  public async createUser(
    request: CreateUserV1Request,
    context: Context,
  ): Promise<CreateUserV1Response> {
    return this.usersCrudRepository.createUser(request.user, context);
  }

  public async readUser(
    request: ReadUserV1Request,
    context: Context,
  ): Promise<ReadUserV1Response> {
    const user = await this.usersCrudRepository.readUser(request.id, context);
    return { user };
  }

  public async readUserByEmail(
    request: ReadUserByEmailV1Request,
    context: Context,
  ): Promise<ReadUserByEmailV1Response> {
    const user = await this.usersCrudRepository.readUserByEmail(
      request.email,
      context,
    );
    return { user };
  }
}