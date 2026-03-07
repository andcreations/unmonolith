import { buildRequestTopic } from '@unmonolith/transport';
import { USERS_AUTH_DOMAIN, USERS_AUTH_SERVICE } from './domain-and-service';

export const UsersAuthRequestTopics = {
  signInV1: topic('signIn', 'v1'),
};

function topic(method: string, version: string): string {
  return buildRequestTopic({
    domain: USERS_AUTH_DOMAIN,
    service: USERS_AUTH_SERVICE,
    method,
    version,
  });
}