import { Injectable, Inject } from '@nestjs/common';
import { Context } from '@unmonolith/common';
import { RequestTransporter } from '@unmonolith/transport';

import { USERS_CRUD_TRANSPORTER_TOKEN } from './inject-tokens';
import { UsersCrudTopics } from './users-crud.topics';
import {
  CreateUserV1Request,
  CreateUserV1Response,
  ReadUserByEmailV1Request,
  ReadUserByEmailV1Response,
  ReadUserV1Request,
  ReadUserV1Response,
} from './dtos';

@Injectable()
export class UsersCrudTransporter {
  public constructor(
    @Inject(USERS_CRUD_TRANSPORTER_TOKEN)
    private readonly transport: RequestTransporter,
  ) {}

  public async createUserV1(
    request: CreateUserV1Request,
    context: Context,
  ): Promise<CreateUserV1Response> {
    return this.transport.sendRequest<
      CreateUserV1Request,
      CreateUserV1Response
    >(UsersCrudTopics.createUserV1, request, context);
  }

  public async readUserV1(
    request: ReadUserV1Request,
    context: Context,
  ): Promise<ReadUserV1Response> {
    return this.transport.sendRequest<
      ReadUserV1Request,
      ReadUserV1Response
    >(UsersCrudTopics.readUserV1, request, context);
  }

  public async readUserByEmailV1(
    request: ReadUserByEmailV1Request,
    context: Context,
  ): Promise<ReadUserByEmailV1Response> {
    return this.transport.sendRequest<
      ReadUserByEmailV1Request,
      ReadUserByEmailV1Response
    >(UsersCrudTopics.readUserByEmailV1, request, context);
  }
}