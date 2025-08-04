import { buildTopic } from '@unmonolith/transport';

export const UsersAuthTopics = {
  signInV1: topic('signIn', 'v1'),
};

function topic(method: string, version: string): string {
  return buildTopic({
    domain: 'users',
    service: 'auth',
    method,
    version,
  });
}