import { Context } from '@unmonolith/common';
import { RequestHandler, RequestController } from '@unmonolith/transport';

import { UsersManagerService } from '../services';
import {
  CreateUserV1Request,
  CreateUserV1Response,
  ReadUserByEmailV1Request,
  ReadUserByEmailV1Response,
  ReadUserV1Request,
  ReadUserV1Response,
  UsersManagerRequestTopics,
} from '@unmonolith/users-manager-service-api';

@RequestController()
export class UsersManagerController {
  public constructor(
    private readonly usersManagerService: UsersManagerService,
  ) {}

  @RequestHandler(UsersManagerRequestTopics.createUserV1)
  public async createUserV1(
    request: CreateUserV1Request,
    context: Context,
  ): Promise<CreateUserV1Response> {
    return this.usersManagerService.createUser(request, context);
  }

  @RequestHandler(UsersManagerRequestTopics.readUserV1)
  public async readUserV1(
    request: ReadUserV1Request,
    context: Context,
  ): Promise<ReadUserV1Response> {
    return this.usersManagerService.readUser(request, context);
  }

  @RequestHandler(UsersManagerRequestTopics.readUserByEmailV1)
  public async readUserByEmailV1(
    request: ReadUserByEmailV1Request,
    context: Context,
  ): Promise<ReadUserByEmailV1Response> {
    return this.usersManagerService.readUserByEmail(request, context);
  }
}