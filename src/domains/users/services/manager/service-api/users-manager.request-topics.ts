import { buildRequestTopic } from '@unmonolith/transport';

import {
  USERS_MANAGER_DOMAIN,
  USERS_MANAGER_SERVICE,
} from './domain-and-service';

export const UsersManagerRequestTopics = {
  createUserV1: topic('create', 'v1'),
  readUserV1: topic('get', 'v1'),
  updateUserV1: topic('update', 'v1'),
  deleteUserV1: topic('delete', 'v1'),
  readUserByEmailV1: topic('readByEmail', 'v1'),
};

function topic(method: string, version: string): string {
  return buildRequestTopic({
    domain: USERS_MANAGER_DOMAIN,
    service: USERS_MANAGER_SERVICE,
    method,
    version,
  });
}