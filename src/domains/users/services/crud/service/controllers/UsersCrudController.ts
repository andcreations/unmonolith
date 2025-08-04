import { Context } from '@unmonolith/common';
import { RequestHandler, TransportController } from '@unmonolith/transport';

import { UsersCrudService } from '../services';
import {
  CreateUserV1Request,
  CreateUserV1Response,
  ReadUserByEmailV1Request,
  ReadUserByEmailV1Response,
  ReadUserV1Request,
  ReadUserV1Response,
  UsersCrudTopics,
} from '@unmonolith/users-crud-service-api';

@TransportController()
export class UsersCrudController {
  public constructor(
    private readonly usersCrudService: UsersCrudService,
  ) {}

  @RequestHandler(UsersCrudTopics.createUserV1)
  public async createUserV1(
    request: CreateUserV1Request,
    context: Context,
  ): Promise<CreateUserV1Response> {
    return this.usersCrudService.createUser(request, context);
  }

  @RequestHandler(UsersCrudTopics.readUserV1)
  public async readUserV1(
    request: ReadUserV1Request,
    context: Context,
  ): Promise<ReadUserV1Response> {
    return this.usersCrudService.readUser(request, context);
  }

  @RequestHandler(UsersCrudTopics.readUserByEmailV1)
  public async readUserByEmailV1(
    request: ReadUserByEmailV1Request,
    context: Context,
  ): Promise<ReadUserByEmailV1Response> {
    return this.usersCrudService.readUserByEmail(request, context);
  }
}