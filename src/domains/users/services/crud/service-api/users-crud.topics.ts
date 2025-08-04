import { buildTopic } from '@unmonolith/transport';

export const UsersCrudTopics = {
  createUserV1: topic('create', 'v1'),
  readUserV1: topic('get', 'v1'),
  updateUserV1: topic('update', 'v1'),
  deleteUserV1: topic('delete', 'v1'),
  readUserByEmailV1: topic('readByEmail', 'v1'),
};

function topic(method: string, version: string): string {
  return buildTopic({
    domain: 'users',
    service: 'crud',
    method,
    version,
  });
}